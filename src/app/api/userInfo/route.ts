import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import initMiddleware from '../../../lib/initMiddleware';

const cors = Cors({
  methods: ['GET'], // Specify the allowed HTTP methods
});

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { name } = request.query; // Access the "name" parameter from the query string
  let responseData = {};

  if (name === "arashgoodarzi") {
    responseData = {
      // Your response data here
    };
  }
  response.status(200).json(responseData);
};

// Apply the CORS middleware to the handler function
const corsHandler = initMiddleware(cors);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await corsHandler(req, res); // Pass both req and res arguments to the corsHandler function
  await handler(req, res);
};