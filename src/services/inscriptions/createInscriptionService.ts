import { PrismaClient } from "@prisma/client";
import { InscriptionEntity } from "../../entities/inscriptionEntity";
import { calculateAge, extractDateOfBirth } from "../../utils/extractDate";

const prisma = new PrismaClient();

export class CreateInscriptionService {
  async execute({ age, attractionId, name, rgImagePath }: InscriptionEntity & { rgImagePath: string }) {
    const attraction = await prisma.attractions.findFirst({
      where: {
        id: attractionId,
      },
      include: { Inscription: true },
    });

    if (!attraction) {
      throw new Error("Atração não identificada.");
    }

     const dateOfBirth = await extractDateOfBirth(rgImagePath);
     const extractedAge = calculateAge(dateOfBirth);

     if (age !== extractedAge) {
       throw new Error("A idade informada não corresponde à idade no RG.");
     }

    if (age < attraction.indicated_classification) {
      throw new Error("Idade insuficiente para comparecer na atração.");
    }

    const inscriptionsCount = attraction.Inscription.length;
    if (inscriptionsCount >= attraction.limit) {
      throw new Error(
        "Limite de pessoas na atração excedido, por favor tente em outra atração."
      );
    }

    await prisma.inscription.create({
      data: {
        age,
        name,
        attractionId,
      },
    });

    return { success: true };
  }
}
