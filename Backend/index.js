import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import { hostelModel, locationModel } from "./src/model/Schema.js";
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://chetan:chauhan@cluster0.xx5g40u.mongodb.net/Hosteller?retryWrites=true&w=majority&appName=Cluster0"
);

const typeDefs = gql`
  type location {
    _id: ID!
    name: String!
    image: String!
    hostel: Int
  }

  type hostel {
    _id: ID!
    name: String!
    image: String!
    location_id: ID!
    location: location
  }

  type Query {
    getLocations: [location!]!
    gethostelbylocation(location_id: ID!): [hostel]
  }
`;

const resolvers = {
  Query: {
    // Fetch all locations
    getLocations: async () => {
      try {
        const locations = await locationModel.find();
        return locations;
      } catch (error) {
        console.log(error);
      }
    },

    // Fetch hostels by location_id
    gethostelbylocation: async (_parent, { location_id }) => {
      try {
        if (!location_id) throw new Error("location_id is required");
        const hostels = await hostelModel.find({
          location_id: location_id,
        });
        return hostels;
      } catch (error) {
        console.log(error);
      }
    },
  },

  location: {
    // Fetch hostels for a particular location based on the _id
    hostel: async (parent) => {
      try {
        // parent._id is the location ID
        const hostels = await hostelModel.find({
          location_id: parent._id,
        });
        return hostels.length;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = 5000;
const currServer = async () => {
  try {
    await server.start();

    server.applyMiddleware({ app });

    console.log(`Serer running at http:localhost:${PORT}${server.graphqlPath}`);
  } catch (error) {
    console.log("error connecting to DB", error);
  }
};

app.listen(PORT, () => {
  currServer();
});
