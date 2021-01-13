import { extend } from 'vee-validate'

extend('email', value => {
  return value >= 0
})
