import PropTypes from 'prop-types';

export const FirstApo = ({title, subTitle}) => {
  return (
    <>
      <h1>{ title }</h1>

      <h5> { subTitle } </h5>
    </>
  )
}

FirstApo.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}
