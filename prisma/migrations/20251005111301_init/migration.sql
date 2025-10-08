-- CreateEnum
CREATE TYPE "BusinessType" AS ENUM ('PRODUCT', 'SERVICE', 'SUBSCRIPTION', 'PLATFORM', 'LICENSING', 'RENTAL', 'SHARING', 'ADVERTISING', 'IMPACT');

-- CreateEnum
CREATE TYPE "BusinessStage" AS ENUM ('IDEA', 'CONCEPT', 'MVP', 'VALIDATED', 'GROWTH', 'PIVOTING');

-- CreateEnum
CREATE TYPE "BusinessArea" AS ENUM ('INDUSTRY', 'COMMERCE', 'SERVICES', 'FINANCE', 'TOURISM', 'MEDIA', 'CULTURE');

-- CreateEnum
CREATE TYPE "BusinessSubarea" AS ENUM ('GOODS_PRODUCTION', 'AGRIBUSINESS', 'MINING', 'CONSTRUCTION', 'OTHER_INDUSTRY', 'RETAIL', 'WHOLESALE', 'FRANCHISE', 'OTHER_COMMERCE', 'HEALTH_WELLNESS', 'EDUCATION', 'CONSULTING', 'TECHNOLOGY', 'LOGISTICS', 'LEGAL', 'SPECIALIZED', 'OTHER_SERVICES', 'BANKING', 'INSURANCE', 'FINTECH', 'STOCK_MARKET', 'OTHER_FINANCE', 'HOSPITALITY', 'FOOD', 'TRAVEL_AGENCY', 'EVENTS', 'OTHER_TOURISM', 'ADVERTISING', 'AUDIOVISUAL', 'JOURNALISM', 'DIGITAL_PLATFORMS', 'INFO_MANAGEMENT', 'PR', 'OTHER_MEDIA', 'ART_PRODUCTION', 'LITERATURE', 'MUSIC_AUDIO', 'PERFORMING_ARTS', 'HERITAGE', 'CREATIVE_INDUSTRY');

-- CreateEnum
CREATE TYPE "ModelType" AS ENUM ('B2B', 'B2C', 'B2G', 'C2C', 'C2B', 'B2B2C', 'G2C');

-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RepaymentUnit" AS ENUM ('WEEKS', 'MONTHS', 'YEARS');

-- CreateEnum
CREATE TYPE "PaymentFrequency" AS ENUM ('WEEKLY', 'MONTHLY', 'BIMONTHLY', 'QUARTERLY', 'FOURMONTHLY', 'SEMIANNUAL', 'ANNUAL', 'NONE');

-- CreateEnum
CREATE TYPE "InterestType" AS ENUM ('FIXED', 'VARIABLE', 'MIXED', 'NONE');

-- CreateEnum
CREATE TYPE "DocType" AS ENUM ('CC', 'PASSPORT');

-- CreateEnum
CREATE TYPE "ProductPlan" AS ENUM ('BASIC', 'PREMIUM');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surnames" TEXT,
    "password" TEXT NOT NULL,
    "productPlan" "ProductPlan",
    "emailVerified" BOOLEAN,
    "rememberToken" TEXT,
    "nif" TEXT,
    "identificationDocType" "DocType",
    "identificationDocNumber" TEXT,
    "docExpiry" TIMESTAMP(3),
    "address" TEXT,
    "postalCode" TEXT,
    "iban" TEXT,
    "paypalEmail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "businessType" "BusinessType" NOT NULL,
    "businessArea" "BusinessArea" NOT NULL,
    "businessSubarea" "BusinessSubarea" NOT NULL,
    "stage" "BusinessStage" NOT NULL,
    "modelType" "ModelType",
    "capitalPlan" TEXT,
    "pitchLinks" TEXT[],
    "mediaUrls" TEXT[],
    "pitchDeckFiles" TEXT[],
    "targetValue" INTEGER NOT NULL,
    "repaymentPeriod" INTEGER NOT NULL,
    "repaymentUnit" "RepaymentUnit" NOT NULL,
    "paymentFrequency" "PaymentFrequency" NOT NULL,
    "gracePeriod" INTEGER,
    "interestType" "InterestType" NOT NULL,
    "interestRate" DOUBLE PRECISION,
    "euriborIndexed" BOOLEAN,
    "status" "CampaignStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "investorId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "interestRate" DOUBLE PRECISION NOT NULL,
    "repaymentPlan" TEXT,
    "paymentFrequency" "PaymentFrequency" NOT NULL,
    "repaymentPeriod" INTEGER NOT NULL,
    "repaymentUnit" "RepaymentUnit" NOT NULL,
    "interestType" "InterestType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
