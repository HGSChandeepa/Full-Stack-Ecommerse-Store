import mongoose from "mongoose";
export function mongooseConnect() {
  //if there is a connection already, use it
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    //if there is no connection, create one
    const uri = process.env.MONGODB_URI;

    return mongoose.connect(uri);
  }
}
