# Project Name

A simple API that generates images using Hugging Face API and uploads them to ImgBB to provide a public URL.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Requirements](#requirements)
- [Installation](#installation)
- [Vercel CLI Installation](#vercel-cli-installation)
  - [Windows](#windows)
  - [Linux](#linux) and  [macOS](#macos)
- [Deployment](#deployment)
- [Usage](#usage)

---

## Prerequisites

1. **Vercel Account**: You need a [Vercel](https://vercel.com/signup) account to deploy the project.
2. **Hugging Face API Key**: To generate images, sign up on [Hugging Face](https://huggingface.co/join) and get your API key.
3. **ImgBB API Key**: To upload images and get a public URL, create an account on [ImgBB](https://imgbb.com/) and obtain your API key.

## Requirements

- **Node.js** (>=14.0.0)
- **Vercel CLI** (for deployment)
- **Hugging Face API Key**
- **ImgBB API Key**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ddm21/huggingface-imgbb.git
   cd huggingface-imgbb
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Hugging Face and ImgBB API keys:
   ```plaintext
   HUGGING_FACE_API_KEY=your_huggingface_api_key
   IMGBB_API_KEY=your_imgbb_api_key
   ```

## Vercel CLI Installation

### Windows

1. Open PowerShell or Command Prompt.
2. Install the Vercel CLI using npm:
   ```bash
   npm install -g vercel
   ```

### macOS and Linux

1. Open Terminal.
2. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
3. Verify the installation:
   ```bash
   vercel --version
   ```

## Deployment

1. Login to Vercel:
   ```bash
   vercel login
   ```
2. Deploy the project:
   ```bash
   vercel deploy
   ```
3. Follow the on-screen prompts to complete the deployment process.
4. After completing this steps add the Huggingface and imgBB API to Vercel Environment
