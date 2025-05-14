const mongoose = require('mongoose');
require('../dbconfig/dbfile');
async function getNoticias(noticia, done) {
  const data = await noticia.find()
  done(undefined, data)
}
async function getNoticiasById(noticia, id, done) {
  const data = await noticia.findById(id)
  done(undefined, data)
}
async function getTopics(noticia, done) {
  const data = await noticia.aggregate([
    {
      $facet: {
        noti1: [
          {
            $project: {
              authors: 1, banner_image: 1, category_within_source: 1,
              tituloCorto: {
                $cond: [
                  { $isArray: { $split: ["$title", " "] } },
                  {
                    $reduce: {
                      input: { $slice: [{ $split: ["$title", " "] }, 10] },
                      initialValue: "",
                      in: {
                        $cond: [
                          { $eq: ["$$value", ""] }, "$$this", { $concat: ["$$value", " ", "$$this"] }
                        ]
                      }
                    }
                  },
                  null
                ]
              }
            }
          },
          {
            $limit: 4
          }
        ]
      }
    },
    {
      $unwind: "$noti1"
    }
  ]);
  done(undefined, data);
}
async function getTopics1(noticia, done){
    const data = await noticia.aggregate([
{
      $facet: {
        noti2:[
          {
            $sort: {
              overall_sentiment_label: -1
            }
          },
          {
            $limit: 3
          }
        ]
      }
    },
    {
      $unwind: "$noti2"
    }
    ]);
    done(undefined, data);
  }
  async function getTopics2(noticia, done){
    const data = await noticia.aggregate([
{
      $facet: {
        noti3:[
          {
            $sort:{ overall_sentiment_score:-1}
          },
          {
            $limit:4
          }
        ]
      }
    },
    {
      $unwind: "$noti3"
    }
    ]);
    done(undefined, data);
  }
  async function getTopics3(noticia, done){
    const data = await noticia.aggregate([
      {
        $facet: {
          noti4: [
            {
              $project: {
                authors: 1, banner_image: 1, category_within_source: 1,
                tituloCorto: {
                  $cond: [
                    { $isArray: { $split: ["$title", " "] } },
                    {
                      $reduce: {
                        input: { $slice: [{ $split: ["$title", " "] }, 15] },
                        initialValue: "",
                        in: {
                          $cond: [
                            { $eq: ["$$value", ""] }, "$$this", { $concat: ["$$value", " ", "$$this"] }
                          ]
                        }
                      }
                    },
                    null
                  ]
                }
              }
            },
            {
              $sort: {
                overall_sentiment_label: 1
              }
            },
            {
              $limit: 3
            }
          ]
        }
      },
    {
      $unwind: "$noti4"
    }
    ]);
    done(undefined, data);
  }
  async function getTopics4(noticia, done){
    const data = await noticia.aggregate([
{
      $facet: {
        noti5:[
          {
            $sort: {
              authors: -1
            }
          },
          {
            $limit: 4
          }
        ]
      }
    },
    {
      $unwind: "$noti5"
    }
    ]);
    done(undefined, data);
  }
module.exports = {getNoticias, getNoticiasById, getTopics, getTopics1, getTopics2, getTopics3, getTopics4}