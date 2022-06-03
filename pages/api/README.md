# API Route Docs

## POST /keywords - Keyword Extraction

### Request Format

`

    {
        industry: string
        text: string
    }
`

### Response Format

`

    {
        success: boolean
        keywords: string[]
        tags: string[]
        error?: string
    }
`
