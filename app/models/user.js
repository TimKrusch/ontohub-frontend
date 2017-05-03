import DS from 'ember-data'
import OrganizationalUnitModel from './organizational-unit'

import schema from 'ontohub-frontend/schemas/models/user_model'
import { JsonSchemaModel } from 'ember-json-schema'

import { validator, buildValidations } from 'ember-cp-validations'

const schemaModel = JsonSchemaModel.generate(schema),
      Validations = buildValidations({
        name: {
          description: 'Username',
          validators: [
            validator('presence', { presence: true, ignoreBlank: true }),
            validator('length', { min: 3, max: 100 }),
            validator('username-available', { debounce: 500 })]
        },
        password: {
          description: 'Password',
          validators: [
            validator('presence', { presence: true, ignoreBlank: true }),
            validator('length', { min: 10, max: 128 })
          ]
        },
        passwordConfirmation: {
          description: 'Password Confirmation',
          validators: [
            validator('presence', { presence: true, ignoreBlank: true }),
            validator('confirmation', {
              on: 'password',
              message: '{description} do not match',
              description: 'Passwords'
            })
          ]
        },
        email: {
          description: 'Email',
          validators: [
            validator('presence', { presence: true, ignoreBlank: true }),
            validator('format', { type: 'email' })
          ]
        }
      }),
      mixin = Object.assign({}, schemaModel, Validations)

export default OrganizationalUnitModel.extend(mixin, {
  organizations: DS.hasMany('organization'),
  // The captcha is only used for signing up:
  captcha: DS.attr('string')
})
