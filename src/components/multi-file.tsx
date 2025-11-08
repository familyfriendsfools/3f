/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vBFmhDxZNgl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8">
      <div className="flex flex-col gap-2">
        <h2>Upload Images</h2>
        <p>
          Select multiple images to upload or drag and drop them here.
        </p>
      </div>
      <div className="grid gap-6">
        <form className="grid gap-6">
          <div
            className="grid gap-2 border-2 border-dashed border-muted rounded-md p-6 hover:border-primary transition-colors"
            onDragOver={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDragEnter={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={e => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <label htmlFor="images">Images</label>
            <div className="flex items-center justify-center">
              <input
                id="images"
                type="file"
                multiple
                accept="image/*,video/*"
                className="sr-only"
              />
              <button className="w-full bg-orange-500 text-white px-3 py-1 rounded-md">
                <UploadIcon className="mr-2 h-4 w-4" />
                Select Files
              </button>
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
      </div>
      <div>
        <button type="submit">Upload</button>
      </div>
    </div>
  );
}

function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
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
  );
}
