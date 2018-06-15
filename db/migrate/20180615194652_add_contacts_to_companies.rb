class AddContactsToCompanies < ActiveRecord::Migration[5.1]
  def change
    add_column :companies, :contacts, :text
  end
end
