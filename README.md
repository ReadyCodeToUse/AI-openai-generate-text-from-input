# AI: Using OPENAI to generate text from input
## Introduction
This simple API is created to show how we can generate some text content from text input





## Installation

Clone the repo
```bash
  git clone https://github.com/ReadyCodeToUse/AI-openai-generate-text-from-input.git
```
Install package

```bash
$ cd AI-openai-generate-text-from-input
```

```bash
$ npm install
```

Create .env file

```bash
$ cp example.env .env
```

## Create OpenAI Key
An OpenAI key is required to make request. You can register to their site: https://openai.com/, then from your personal area you can create an API_KEY.

After that you need to open .env file already created, paste the OPENAI_API_KEY generated.

## Run
```bash
$ npm start
```

## API Reference

#### Generate Text

```http
  POST /input/generate
```

| Parameter     | Type     | Description                                               | Example                                                      |
|:--------------|:---------|:----------------------------------------------------------|:-------------------------------------------------------------|
| `input`       | `string` | **Required**. The input you provide to generate some text | Write a short article on - how to write a book for beginners |
| `temperature` | `float`  | Specify the randomness of the generated text              | 0.8                                                          |
| `max_tokens`  | `number` | Specify the maximum number of tokens to generate          | 800                                                          |




#### Response

```json
{
    "response" : "string"
}
```

