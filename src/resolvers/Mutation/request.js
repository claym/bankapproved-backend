const request = {
    async createDraft(parent, { title, content }, context) {
        const userId = getUserId(context)
        return context.prisma.createPost({
          title,
          content,
          author: { connect: { id: userId } },
        })
      },
    
      async createRequest(parent, {applicationId, name, description}, context) {
          console.log("HELLO WORLD")
          const date = new Date();
          return context.prisma.createRequest(
            {
                application: { connect: { id: applicationId}},
                name,
                description,
                date
            }
          )
      }
}

module.exports = { request }