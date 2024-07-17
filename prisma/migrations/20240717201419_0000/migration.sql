-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `CPF` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `roleId` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_CPF_key`(`CPF`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Authorization` (
    `id_role` INTEGER NOT NULL AUTO_INCREMENT,
    `name_role` VARCHAR(191) NOT NULL,
    `discription_role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_role`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id_event` INTEGER NOT NULL AUTO_INCREMENT,
    `name_event` VARCHAR(191) NOT NULL,
    `discription` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `date_event` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_event`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attractions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `hours` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `discription` VARCHAR(191) NOT NULL,
    `limit` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL,
    `indicated_classification` INTEGER NOT NULL,
    `event_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `attractionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Authorization`(`id_role`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attractions` ADD CONSTRAINT `attractions_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `Event`(`id_event`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscription` ADD CONSTRAINT `Inscription_attractionId_fkey` FOREIGN KEY (`attractionId`) REFERENCES `attractions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
