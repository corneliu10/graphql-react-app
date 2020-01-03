const shortid = require("shortid");
const { createWriteStream } = require("fs");
const Agent = require("../../models/Agent");

const storeUpload = async ({ stream, filename }) => {
  const id = shortid.generate();
  const path = `assets/${id}-${filename}`;

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ id, path }))
      .on("error", reject)
  );
};

const processUpload = async upload => {
  const { createReadStream, filename } = await upload;
  const stream = createReadStream();
  const { id, path } = await storeUpload({ stream, filename });
  return `${id}-${filename}`;
};

const resolvers = {
  Query: {
    agent: async (_, { id }) => {
      const agent = await Agent.findAll({
        where: {
          id
        }
      });

      if (!agent || agent.length === 0) {
        return null; //agent not found;
      }

      return agent[0].dataValues;
    },
    agents: () =>
      Agent.findAll()
        .then(agents => agents)
        .catch(err => {
          throw err;
        })
  },
  Mutation: {
    createAgent: async (
      _,
      { agentInput: { name, email, phone, address, zipCode, files } }
    ) => {
      var filesUrl = "";
      if (files !== null) {
        const _files = files.map(file => processUpload(file));
        const urls = await Promise.all(_files);

        if (urls) {
          filesUrl = urls.join();
        }
      }

      console.log(filesUrl);
      try {
        const agent = await Agent.create({
          name,
          email,
          phone,
          address,
          zipCode,
          filesUrl
        });

        return agent;
      } catch (error) {
        throw error;
      }
    }
  }
};

module.exports = resolvers;
