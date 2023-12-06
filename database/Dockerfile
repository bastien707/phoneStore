# Utiliser l'image MySQL officielle en tant que base
FROM mysql:latest

# Définir les variables d'environnement pour le mot de passe de l'utilisateur root
ENV MYSQL_ROOT_PASSWORD=abc

# Créer la base de données lors de la création du conteneur
ENV MYSQL_DATABASE=phoneStore

# Copier les scripts SQL d'initialisation dans le conteneur
COPY ./scripts/init.sql /docker-entrypoint-initdb.d/

# Exposer le port MySQL par défaut
EXPOSE 3306
