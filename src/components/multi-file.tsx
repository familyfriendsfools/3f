/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vBFmhDxZNgl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <Card className="max-w-2xl mx-auto p-6 sm:p-8">
            <CardHeader>
                <CardTitle>Upload Images</CardTitle>
                <CardDescription>Select multiple images to upload or drag and drop them here.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-6">
                    <div
                        className="grid gap-2 border-2 border-dashed border-muted rounded-md p-6 hover:border-primary transition-colors"
                        onDragOver={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onDragEnter={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onDrop={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                    >
                        <Label htmlFor="images">Images</Label>
                        <div className="flex items-center justify-center">
                            <Input id="images" type="file" multiple accept="image/*,video/*" className="sr-only" />
                            <Button variant="outline" className="w-full">
                                <UploadIcon className="mr-2 h-4 w-4" />
                                Select Files
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src="/placeholder.svg"
                            alt="Image preview"
                            width="84"
                            height="84"
                            className="aspect-square w-full overflow-hidden rounded-md object-cover"
                        />
                        <img
                            src="/placeholder.svg"
                            alt="Image preview"
                            width="84"
                            height="84"
                            className="aspect-square w-full overflow-hidden rounded-md object-cover"
                        />
                        <img
                            src="/placeholder.svg"
                            alt="Image preview"
                            width="84"
                            height="84"
                            className="aspect-square w-full overflow-hidden rounded-md object-cover"
                        />
                        <img
                            src="/placeholder.svg"
                            alt="Image preview"
                            width="84"
                            height="84"
                            className="aspect-square w-full overflow-hidden rounded-md object-cover"
                        />
                        <img
                            src="/placeholder.svg"
                            alt="Image preview"
                            width="84"
                            height="84"
                            className="aspect-square w-full overflow-hidden rounded-md object-cover"
                        />
                        <img
                            src="/placeholder.svg"
                            alt="Image preview"
                            width="84"
                            height="84"
                            className="aspect-square w-full overflow-hidden rounded-md object-cover"
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button type="submit">Upload</Button>
            </CardFooter>
        </Card>
    )
}

function UploadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}