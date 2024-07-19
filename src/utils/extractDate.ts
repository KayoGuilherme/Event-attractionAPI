import Tesseract from "tesseract.js";

export async function extractDateOfBirth(imagePath: string) {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imagePath, "por");
    const dateOfBirthMatch = text.match(/(\d{2}\/\d{2}\/\d{4})/);
    if (dateOfBirthMatch) {
      return dateOfBirthMatch[0];
    }
    throw new Error("Data de nascimento não encontrada.");
  } catch (error: any) {
    throw new Error("Erro ao processar a imagem: " + error.message);
  }
}

export function calculateAge(dateOfBirth: string): number {
  const [day, month, year] = dateOfBirth.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
