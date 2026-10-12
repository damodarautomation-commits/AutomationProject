
# Use Microsoft's official Playwright image
FROM mcr.microsoft.com/playwright:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

RUN npx playwright install --with-deps

# Copy the remaining project files
COPY . .

# Run Playwright tests when the container starts
CMD ["npx", "playwright", "test"]
