FROM node:20.12.0-alpine3.19

# Set working directory inside Moxsh
WORKDIR /usr/src/app/Moxsh

# Copy necessary files
COPY Moxsh/package.json Moxsh/package-lock.json Moxsh/turbo.json Moxsh/tsconfig.json ./

# Copy apps and packages directories
COPY Moxsh/apps ./apps
COPY Moxsh/packages ./packages

# Install dependencies
RUN npm install

# Run Prisma generate
RUN cd packages/db && npx prisma generate

# Filter the build down to just one app
RUN npm run build

# Command to run your user app
CMD ["npm", "run", "start-user-app"]
