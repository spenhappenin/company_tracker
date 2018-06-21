class Topic < ApplicationRecord
  belongs_to :user

  def self.get_categories
    Topic.find_by_sql("SELECT DISTINCT Category AS value, Category AS text FROM Topics ORDER BY Category ASC")
  end
end
