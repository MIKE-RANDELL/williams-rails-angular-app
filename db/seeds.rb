# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
sod = Product.create(name: 'Sod, Grass, Turf')

floratam = SubProduct.create(name: 'Floratam',
                             description: 'is a warm-season lawn grass that is popular for cultivation in tropical and subtropical regions. It is a medium- to high-maintenance grass that forms a thick, carpetlike sod, crowding out most weeds and other grasses.',
                             price: 140)

sod.sub_products.push(floratam)

review1 = Review.create(name: 'MIKERANDELL',
                        review: 'this is the first review, success')

review2 = Review.create(name: 'LYNETTERANDELL',
                        review: 'this is the second review, success')
