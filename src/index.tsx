import * as ReactDOM from 'react-dom/client'
import { App } from './App'

const root = document.getElementById('root') as HTMLElement
const reactRoot = ReactDOM.createRoot(root)
reactRoot.render(<App />)
