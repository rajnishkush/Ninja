import moment from 'moment';

const Date = ({ date }) => {
    const dateObj = moment(date);
    const day = dateObj.format('DD');
    const month = dateObj.format('MM');
    const year = dateObj.format('YYYY');
    return (
        <p>{day}-{month}-{year}</p>
    );
}

export default Date;