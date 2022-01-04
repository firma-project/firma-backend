/* eslint-disable spaced-comment */
import { connect } from 'mongoose';

export default connect(`${process.env.MONGO_URL}`);


