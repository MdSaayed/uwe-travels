import { Link } from "react-router-dom"

const Copyright = () => {
  return (
  
      <div className="mt-16 border-t border-gray-100 pt-8">
            <p className="text-center text-xs/relaxed text-gray-500">
              © Company 2022. All rights reserved.
      
              <br />
      
              Created with
              <Link to="/" className="text-gray-700 underline transition hover:text-gray-700/75">Laravel</Link>
              and
              <Link to="/" className="text-gray-700 underline transition hover:text-gray-700/75"
                >Laravel Livewire</Link>.
            </p>
          </div>

  )
}

export default Copyright