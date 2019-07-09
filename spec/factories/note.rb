FactoryBot.define do
    factory :note do
        title { Faker::Lorem.words(rand(2..10)) }
        body { Faker::Lorem.paragraphs(rand(2..8)) }
        all_tags { 'music, article, graph' }
    end
end
