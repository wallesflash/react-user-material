# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!([
                 {
                   name: "Daniel",
                   surname: "Wolan",
                   date_of_birth: "1980-01-01"
                 },
                 {
                   name: "Jan",
                   surname: "Kowalski",
                   date_of_birth: "1982-01-01"
                 },
                 {
                   name: "Piotr",
                   surname: "Zima",
                   date_of_birth: "1984-01-01"
                 },
                 {
                   name: "Janusz",
                   surname: "Nowak",
                   date_of_birth: "1986-01-01"
                 },
                 {
                   name: "Kamil",
                   surname: "Kot",
                   date_of_birth: "1988-01-01"
                 }

             ])