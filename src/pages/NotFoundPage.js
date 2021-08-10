import classes from './NotFoundPage.module.css'
const NotFoundPage = () => {
  return (
    <div className={classes.pageNotFound}>
      <h1>404 : Page Not Found :(</h1>
      <p>Try navigating to a valid URL</p>
    </div>
  );
};
export default NotFoundPage;
