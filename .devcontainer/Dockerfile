FROM ubuntu:20.04

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID
ARG NODE_VERSION

# Ensure apt is in non-interactive to avoid prompts
ENV DEBIAN_FRONTEND=noninteractive

# Update repositories index
RUN apt update --fix-missing && apt upgrade -y

# Install util tools
RUN ln -snf /usr/share/zoneinfo/UTC /etc/localtime && echo "UTC" > /etc/timezone
RUN apt install -y apt-utils git rsync nano vim unzip curl wget software-properties-common mysql-client

# Install dependencies.
RUN apt-get -y update --no-install-recommends \
    && apt-get -y install --no-install-recommends \
    build-essential \
    curl \
    ca-certificates \
    apt-utils \
    dialog \
    git \
    vim \
    && apt-get autoremove -y \
    && apt-get clean -y

# Add Node.js repository.
RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION.x | bash -

# Install Node.js.
RUN apt-get -y update --no-install-recommends \
    && apt-get -y install --no-install-recommends nodejs \
    && apt-get autoremove -y \
    && apt-get clean -y

EXPOSE 80
EXPOSE 443

# Create the user.
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME

RUN usermod -aG sudo $USERNAME

ENV DEBIAN_FRONTEND=dialog

USER $USERNAME
