echo "Enter the name of the model:"
read model_name

echo "Enter the attributes for the model (in the format of 'name:type,name:type,...'):"
read attributes

npx sequelize-cli model:generate --name $model_name --attributes $attributes