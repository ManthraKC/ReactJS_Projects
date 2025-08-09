import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

export default function RecipeCode(props){
    return (
        <section className="flex flex-col items-center mx-30 my-5 leading-7 gap-4">
            <h2 className="text-2xl font-bold ">Chef Claude Recommends:</h2>
        <ReactMarkdown   remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold text-gray-800 mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base text-gray-700 mb-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal ml-6 space-y-1 text-gray-700" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc ml-6 text-gray-700 mb-1" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="mb-1" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-gray-600" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-gray-800" {...props} />
          ),
        }}>{props.recipe}</ReactMarkdown>  
        </section>       
        
    )
}