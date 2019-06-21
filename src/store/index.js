import devStore  from './configure.dev';
import prodStore from './configure.prod';

export default (process.env.NODE_ENV === 'production') ? prodStore : devStore
