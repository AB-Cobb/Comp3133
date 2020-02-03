import mongoose from 'mongoose'
// {
//       "id": 0,
//       "img": {
//         "src": "https://res.cloudinary.com/ceremony/image/upload/v1567032542/ceremony/Appraisal_Card_Mockup_w4gtid.png",
//         "alt": "art appraisal card"
//       },
//       "heading": "ART APPRAISAL CARD",
//       "type": "Graphic Design",
//       "client": "Gallery House, Fine Art Gallery"
//     }
const projectSchema = new mongoose.Schema(
  // fill out model according to whats above
  {
    // name: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   maxlength: 500
    // },
    // status: {
    //   type: String,
    //   required: true,
    //   enum: ['active', 'complete', 'pastdue'],
    //   default: 'active'
    // },
    img: [
      {
        src: { type: String },
        alt: { type: String, maxlength: 35 }
      }
    ],
    heading: {
      type: String
      // required: true
    },
    type: {
      type: String
    },
    client: {
      type: String
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)

projectSchema.index({ list: 1, name: 1 }, { unique: true })

export const Project = mongoose.model('project', projectSchema)
