import { useRouteError } from 'react-router-dom'

const ErrorPage = ({mainColor, color}) => {
  const error = useRouteError(); 
  console.log(error);
  return (
    <div className='error-page' style={{backgroundColor: mainColor, color: color}}>
      <h1>Page Not Found</h1>
    </div>
  )
}

export default ErrorPage
