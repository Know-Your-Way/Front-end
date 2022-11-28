


export const schema = {

  from_name: {
    presence: { allowEmpty: false, message: "name is required"},
    length: {
      maximum: 128,
    },
  },
  last_name: {
    presence: { allowEmpty: false, message: "last name is required" },
    length: {
      maximum: 128,
    },
  },
  contact_number: {           
    presence: { allowEmpty: false, message: "contact number is required" },
    length: {
      maximum: 128,
    },
  },
  user_email: {
    presence: { allowEmpty: false, message: "an e-mail is required" },
    email: true,
    length: {
      maximum: 300,
    },
  },
  message: {
    presence: { allowEmpty: false, message: "you cannot leave an empty message" },
    length: {
      maximum: 300,
    },
  },

};
