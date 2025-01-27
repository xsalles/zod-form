import { getCountries, getCountryCallingCode } from "libphonenumber-js"

const countries = getCountries()

export const coutryCodes = countries.map((country) => {
  return {
    name: country,
    code: `${getCountryCallingCode(country)}`
  }
})

