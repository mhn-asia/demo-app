ARG VARIANT="16"
FROM mcr.microsoft.com/devcontainers/typescript-node:0-${VARIANT}

ENV NODE_OPTIONS=--max_old_space_size=12240

RUN su node -c "npm install -g @angular/cli@latest npm@latest"