export interface ContactForm {
  name: string,
  organization: string,
  contactInformation: contactInformation[]
}

export interface contactInformation {
  type: string,
  label: string,
  email: string,
  phone: string
}
