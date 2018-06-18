class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.string :title, null: false
      t.text :body
      t.string :category
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
