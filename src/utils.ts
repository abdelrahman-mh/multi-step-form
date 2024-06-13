export enum BillingCycle {
  Monthly = "Monthly",
  Yearly = "Yearly",
}

export enum SubscriptionPlan {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}

export enum AddOnType {
  OnlineServices = "Online services",
  LargeStorage = "Large storage",
  CustomizableProfile = "Customizable profile",
}

// Price data
export const billingCyclePrices = {
  [BillingCycle.Monthly]: {
    [SubscriptionPlan.Arcade]: 9,
    [SubscriptionPlan.Advanced]: 12,
    [SubscriptionPlan.Pro]: 15,
  },
  [BillingCycle.Yearly]: {
    [SubscriptionPlan.Arcade]: 90,
    [SubscriptionPlan.Advanced]: 120,
    [SubscriptionPlan.Pro]: 150,
  },
}
export const addOnPrices = {
  [BillingCycle.Monthly]: {
    [AddOnType.OnlineServices]: 1,
    [AddOnType.LargeStorage]: 2,
    [AddOnType.CustomizableProfile]: 2,
  },
  [BillingCycle.Yearly]: {
    [AddOnType.OnlineServices]: 10,
    [AddOnType.LargeStorage]: 20,
    [AddOnType.CustomizableProfile]: 20,
  },
}

export const subPlanDataOrdered: { plan: SubscriptionPlan; img: string }[] = [
  { plan: SubscriptionPlan.Arcade, img: "/images/icon-arcade.svg" },
  { plan: SubscriptionPlan.Advanced, img: "/images/icon-advanced.svg" },
  { plan: SubscriptionPlan.Pro, img: "/images/icon-pro.svg" },
]

export const addOnsDataOrdered: { addOn: AddOnType; desc: string }[] = [
  { addOn: AddOnType.OnlineServices, desc: "Access to multiplayer games" },
  { addOn: AddOnType.LargeStorage, desc: "Extra 1TB of cloud save" },
  {
    addOn: AddOnType.CustomizableProfile,
    desc: "Custom theme on your profile",
  },
]

export interface PersonalInfoFrom {
  name: string
  email: string
  phone: string
}

export interface SubscriptionInfoForm {
  billed: BillingCycle
  plan: SubscriptionPlan
}

export type AddOnsForm = {
  [key in AddOnType]: boolean
}
export type FormSteps = PersonalInfoFrom & SubscriptionInfoForm & AddOnsForm
export type FormStep = PersonalInfoFrom | SubscriptionInfoForm | AddOnsForm
export type PartialFormSteps = Partial<FormSteps>

// Validation Patterns
export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "Invalid email address",
}

export const namePattern = {
  value: /^[A-Za-z\s\u00C0-\u017F]{1,30}$/,
  message: "Invalid name",
}
export const phonePattern = {
  value: /^\+?(\d{1,3})?(\s?\d{1,4}){1,3}$/,
  message: "Invalid phone number",
}
