import Ajax from './ajax';

const Request = {
  MpWecaht: {
    Menu(params) {
      return Ajax.get('/mpWechat/menu', params);
    },
    MenuUpdate(params) {
      return Ajax.putJson('/mpWechat/menu', params);
    },
    MenuEmpty(params) {
      return Ajax.delete('/mpWechat/menu', params);
    }
  },
  MpWechatMessageReply: {
    List(params) {
      return Ajax.get('/mpWechatMessageReply', params);
    },
    Create(params) {
      return Ajax.get('/mpWechatMessageReply/create', params);
    },
    Store(params) {
      return Ajax.postJson('/mpWechatMessageReply', params);
    },
    Edit(params) {
      return Ajax.get('/mpWechatMessageReply/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/mpWechatMessageReply/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/mpWechatMessageReply/' + params.id, params);
    }
  },
  Dashboard: {
    index() {
      return Ajax.get('/dashboard');
    },
    check() {
      return Ajax.get('/dashboard/check');
    },
    systemInfo() {
      return Ajax.get('/dashboard/system/info');
    }
  },
  Addons: {
    index() {
      return Ajax.get('/addons');
    },
    repository(params) {
      return Ajax.get('/addons/repository', params);
    },
    user(params) {
      return Ajax.get('/addons/repository/user', params);
    },
    buy(params) {
      return Ajax.get('/addons/repository/buy', params);
    },
    install(params) {
      return Ajax.get('/addons/repository/install', params);
    },
    upgrade(params) {
      return Ajax.get('/addons/repository/upgrade', params);
    },
    switchHandler(params) {
      return Ajax.postJson('/addons/switch', params);
    }
  },
  User: {
    info() {
      return Ajax.get('/user');
    },
    menus() {
      return Ajax.get('/menus');
    }
  },
  Login: {
    login(params) {
      return Ajax.postJson('/login', params);
    }
  },
  Announcement: {
    List(params) {
      return Ajax.get('/announcement', params);
    },
    Store(params) {
      return Ajax.postJson('/announcement', params);
    },
    Edit(params) {
      return Ajax.get('/announcement/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/announcement/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/announcement/' + params.id, params);
    }
  },
  CourseCategory: {
    List(params) {
      return Ajax.get('/courseCategory', params);
    },
    Create(params) {
      return Ajax.postJson('/courseCategory', params);
    },
    Edit(params) {
      return Ajax.get('/courseCategory/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/courseCategory/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/courseCategory/' + params.id, params);
    }
  },
  Role: {
    List(params) {
      return Ajax.get('/role', params);
    },
    All(params) {
      return Ajax.get('/role/all', params);
    },
    Store(params) {
      return Ajax.postJson('/role', params);
    },
    Edit(params) {
      return Ajax.get('/role/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/role/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/role/' + params.id, params);
    }
  },
  Link: {
    List(params) {
      return Ajax.get('/link', params);
    },
    Store(params) {
      return Ajax.postJson('/link', params);
    },
    Edit(params) {
      return Ajax.get('/link/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/link/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/link/' + params.id, params);
    }
  },
  Slider: {
    List(params) {
      return Ajax.get('/slider', params);
    },
    Store(params) {
      return Ajax.postJson('/slider', params);
    },
    Edit(params) {
      return Ajax.get('/slider/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/slider/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/slider/' + params.id, params);
    }
  },
  IndexBanner: {
    List(params) {
      return Ajax.get('/indexBanner', params);
    },
    Create() {
      return Ajax.get('/indexBanner/create');
    },
    Store(params) {
      return Ajax.postJson('/indexBanner', params);
    },
    Edit(params) {
      return Ajax.get('/indexBanner/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/indexBanner/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/indexBanner/' + params.id, params);
    }
  },
  AdFrom: {
    List(params) {
      return Ajax.get('/ad_from', params);
    },
    Store(params) {
      return Ajax.postJson('/ad_from', params);
    },
    Edit(params) {
      return Ajax.get('/ad_from/' + params.id);
    },
    Number(params) {
      return Ajax.get('/ad_from/' + params.id + '/number');
    },
    Update(params) {
      return Ajax.putJson('/ad_from/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/ad_from/' + params.id, params);
    }
  },
  CourseComment: {
    List(params) {
      return Ajax.get('/course_comment', params);
    },
    Delete(params) {
      return Ajax.postJson('/course_comment/delete', params);
    }
  },
  VideoComment: {
    List(params) {
      return Ajax.get('/video_comment', params);
    },
    Delete(params) {
      return Ajax.postJson('/video_comment/delete', params);
    }
  },
  Order: {
    List(params) {
      return Ajax.get('/order', params);
    },
    Detail(params) {
      return Ajax.get('/order/' + params.id, params);
    },
    Finish(params) {
      return Ajax.get('/order/' + params.id + '/finish', params);
    }
  },
  Member: {
    List(params) {
      return Ajax.get('/member', params);
    },
    Create() {
      return Ajax.get('/member');
    },
    Store(params) {
      return Ajax.postJson('/member', params);
    },
    Edit(params) {
      return Ajax.get('/member/' + params.id, params);
    },
    Update(params) {
      return Ajax.putJson('/member/' + params.id, params);
    },
    InviteBalanceWithdrawOrders(params) {
      return Ajax.get('/member/inviteBalance/withdrawOrders', params);
    },
    CreateInviteBalanceWithdrawOrder(params) {
      return Ajax.postJson('/member/inviteBalance/withdrawOrders', params);
    },
    Detail(params) {
      return Ajax.get('/member/' + params.id + '/detail', params);
    },
    Courses(params) {
      return Ajax.get('/member/' + params.id + '/detail/userCourses', params);
    },
    Videos(params) {
      return Ajax.get('/member/' + params.id + '/detail/userVideos', params);
    },
    Roles(params) {
      return Ajax.get('/member/' + params.id + '/detail/userRoles', params);
    },
    Collect(params) {
      return Ajax.get('/member/' + params.id + '/detail/userCollect', params);
    },
    History(params) {
      return Ajax.get('/member/' + params.id + '/detail/userHistory', params);
    },
    Orders(params) {
      return Ajax.get('/member/' + params.id + '/detail/userOrders', params);
    },
    Invite(params) {
      return Ajax.get('/member/' + params.id + '/detail/userInvite', params);
    },
    Credit1Records(params) {
      return Ajax.get('/member/' + params.id + '/detail/credit1Records', params);
    },
    Credit1Change(params) {
      return Ajax.postJson('/member/credit1/change', params);
    },
    Tags(params) {
      return Ajax.putJson('/member/' + params.id + '/tags', params);
    },
    Remark(params) {
      return Ajax.get('/member/' + params.id + '/remark', params);
    },
    RemarkUpdate(params) {
      return Ajax.putJson('/member/' + params.id + '/remark', params);
    },
    SendMessage(id, message) {
      return Ajax.postJson('/member/' + id + '/message', { message: message });
    },
    VideoWatchRecords(params) {
      return Ajax.get('/member/' + params.id + '/detail/videoWatchRecords', params);
    },
    Import(params) {
      return Ajax.postJson('/member/import', params);
    }
  },
  Course: {
    List(params) {
      return Ajax.get('/course', params);
    },
    All(params) {
      return Ajax.get('/course/all', params);
    },
    Createparams(params) {
      return Ajax.get('/course/create', params);
    },
    Create(params) {
      return Ajax.postJson('/course', params);
    },
    Edit(params) {
      return Ajax.get('/course/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/course/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/course/' + params.id, params);
    },
    WatchRecords(params) {
      return Ajax.get('/course/' + params.id + '/watch/records', params);
    },
    Subscribes(params) {
      return Ajax.get('/course/' + params.course_id + '/subscribes', params);
    },
    SubscribeDelete(params) {
      return Ajax.get('/course/' + params.course_id + '/subscribe/delete', params);
    },
    SubscribeCreate(params) {
      return Ajax.postJson('/course/' + params.course_id + '/subscribe/create', params);
    },
    VideoWatchRecords(courseId, userId) {
      return Ajax.get('/course/' + courseId + '/user/' + userId + '/watch/records');
    }
  },
  CourseAttach: {
    List(params) {
      return Ajax.get('/course_attach', params);
    },
    Store(params) {
      return Ajax.postJson('/course_attach', params);
    },
    Delete(params) {
      return Ajax.delete('/course_attach/' + params.id, params);
    }
  },
  Video: {
    List(params) {
      return Ajax.get('/video', params);
    },
    Create() {
      return Ajax.get('/video/create');
    },
    Store(params) {
      return Ajax.postJson('/video', params);
    },
    Edit(params) {
      return Ajax.get('/video/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/video/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/video/' + params.id, params);
    },
    MultiDelete(params) {
      return Ajax.post('/video/delete/multi', params);
    },
    Subscribes(params) {
      return Ajax.get('/video/' + params.video_id + '/subscribes', params);
    },
    SubscribeCreate(params) {
      return Ajax.postJson('/video/' + params.video_id + '/subscribe/create', params);
    },
    SubscribeDelete(params) {
      return Ajax.get('/video/' + params.video_id + '/subscribe/delete', params);
    },
    WatchRecords(params) {
      return Ajax.get('/video/' + params.video_id + '/watch/records', params);
    },
    Import(params) {
      return Ajax.postJson('/video/import', params);
    }
  },
  CourseChapter: {
    List(params) {
      return Ajax.get('/course_chapter/' + params.course_id, params);
    },
    Create(params) {
      return Ajax.postJson('/course_chapter/' + params.course_id, params);
    },
    Edit(params) {
      return Ajax.get('/course_chapter/' + params.course_id + '/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/course_chapter/' + params.course_id + '/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/course_chapter/' + params.course_id + '/' + params.id);
    }
  },
  Setting: {
    Get() {
      return Ajax.get('/setting');
    },
    Save(params) {
      return Ajax.postJson('/setting', params);
    }
  },
  Administrator: {
    List(params) {
      return Ajax.get('/administrator', params);
    },
    Create(params) {
      return Ajax.get('/administrator/create', params);
    },
    Store(params) {
      return Ajax.postJson('/administrator', params);
    },
    Edit(params) {
      return Ajax.get('/administrator/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/administrator/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/administrator/' + params.id, params);
    },
    ChangePassword(params) {
      return Ajax.putJson('/administrator/password', params);
    }
  },
  AdministratorRole: {
    List(params) {
      return Ajax.get('/administrator_role', params);
    },
    Create(params) {
      return Ajax.get('/administrator_role/create', params);
    },
    Store(params) {
      return Ajax.postJson('/administrator_role', params);
    },
    Edit(params) {
      return Ajax.get('/administrator_role/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/administrator_role/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/administrator_role/' + params.id, params);
    }
  },
  AdministratorPermission: {
    List(params) {
      return Ajax.get('/administrator_permission', params);
    },
    Create(params) {
      return Ajax.postJson('/administrator_permission', params);
    },
    Edit(params) {
      return Ajax.get('/administrator_permission/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/administrator_permission/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/administrator_permission/' + params.id, params);
    }
  },
  Nav: {
    List(params) {
      return Ajax.get('/nav', params);
    },
    Create(params) {
      return Ajax.get('/nav/create', params);
    },
    Store(params) {
      return Ajax.postJson('/nav', params);
    },
    Edit(params) {
      return Ajax.get('/nav/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/nav/' + params.id, params);
    },
    Delete(params) {
      return Ajax.delete('/nav/' + params.id, params);
    }
  },
  Statistic: {
    userRegister(params) {
      return Ajax.get('/statistic/userRegister', params);
    },
    orderCreated(params) {
      return Ajax.get('/statistic/orderCreated', params);
    },
    orderPaidCount(params) {
      return Ajax.get('/statistic/orderPaidCount', params);
    },
    orderPaidSum(params) {
      return Ajax.get('/statistic/orderPaidSum', params);
    },
    courseSell(params) {
      return Ajax.get('/statistic/courseSell', params);
    },
    roleSell(params) {
      return Ajax.get('/statistic/roleSell', params);
    },
    videoWatchDuration(params) {
      return Ajax.get('/statistic/videoWatchDuration', params);
    },
    courseWatchDuration(params) {
      return Ajax.get('/statistic/courseWatchDuration', params);
    }
  },
  PromoCode: {
    List(params) {
      return Ajax.get('/promoCode', params);
    },
    Create(params) {
      return Ajax.postJson('/promoCode', params);
    },
    Edit(params) {
      return Ajax.get('/promoCode/' + params.id);
    },
    Update(params) {
      return Ajax.putJson('/promoCode/' + params.id, params);
    },
    Delete(params) {
      return Ajax.postJson('/promoCode/delete/multi', params);
    },
    Import(params) {
      return Ajax.postJson('/promoCode/import', params);
    },
    Generator(params) {
      return Ajax.postJson('/promoCode/generator', params);
    }
  },
  VideoUpload: {
    AliyunAuthTokenRefresh(params) {
      return Ajax.postJson('/video/token/aliyun/refresh', params);
    },
    AliyunAuthTokenCreate(params) {
      return Ajax.postJson('/video/token/aliyun/create', params);
    },
    TencentAuthToken(params) {
      return Ajax.postJson('/video/token/tencent', params);
    }
  },
  Upload: {
    ImageDownload(params) {
      return Ajax.postJson('/upload/image/download', params);
    }
  },
  Extentions: {
    aliyunHls: {
      Setting: {
        Get() {
          return Ajax.get('/backend/addons/AliyunHls/setting');
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/AliyunHls/setting', params);
        }
      },
      Videos: {
        All(params) {
          return Ajax.get('/backend/addons/AliyunHls/videos', params);
        },
        SubmitTransTask(params) {
          return Ajax.postJson('/backend/addons/AliyunHls/videos/submitTransTask', params);
        }
      }
    },
    aliyunVideosImport: {
      params() {
        return Ajax.get('/backend/addons/aliyun_videos_import/params');
      },
      Import(params) {
        return Ajax.post('/backend/addons/aliyun_videos_import/import', params);
      }
    },
    learningPaths: {
      Paths: {
        List(params) {
          return Ajax.get('/backend/addons/LearningPaths/path/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/LearningPaths/path/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/LearningPaths/path/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/LearningPaths/path/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/LearningPaths/path/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/LearningPaths/path/' + params.id, params);
        }
      },
      Steps: {
        List(params) {
          return Ajax.get('/backend/addons/LearningPaths/step/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/LearningPaths/step/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/LearningPaths/step/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/LearningPaths/step/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/LearningPaths/step/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/LearningPaths/step/' + params.id, params);
        }
      },
      Relation: {
        List(params) {
          return Ajax.get('/backend/addons/LearningPaths/step/relation/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/LearningPaths/step/relation/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/LearningPaths/step/relation/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/LearningPaths/step/relation/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/LearningPaths/step/relation/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/LearningPaths/step/relation/' + params.id, params);
        }
      }
    },
    meeduBooks: {
      BookComment: {
        Index(params) {
          return Ajax.get('/backend/addons/meedu_books/book_comment/index', params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_books/book_comment/' + params.id, params);
        },
        Checked(params) {
          return Ajax.postJson('/backend/addons/meedu_books/book_comment/checked', params);
        }
      },
      ArticleComment: {
        Index(params) {
          return Ajax.get('/backend/addons/meedu_books/article_comment/index', params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_books/article_comment/' + params.id, params);
        },
        Checked(params) {
          return Ajax.postJson('/backend/addons/meedu_books/article_comment/checked', params);
        }
      },
      Category: {
        List(params) {
          return Ajax.get('/backend/addons/meedu_books/book_category/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/meedu_books/book_category/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/meedu_books/book_category/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/meedu_books/book_category/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/meedu_books/book_category/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_books/book_category/' + params.id, params);
        }
      },
      Chapter: {
        List(params) {
          return Ajax.get('/backend/addons/meedu_books/book_chapter/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/meedu_books/book_chapter/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/meedu_books/book_chapter/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/meedu_books/book_chapter/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/meedu_books/book_chapter/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_books/book_chapter/' + params.id, params);
        }
      },
      Article: {
        List(params) {
          return Ajax.get('/backend/addons/meedu_books/book_article/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/meedu_books/book_article/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/meedu_books/book_article/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/meedu_books/book_article/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/meedu_books/book_article/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_books/book_article/' + params.id, params);
        }
      },
      Book: {
        List(params) {
          return Ajax.get('/backend/addons/meedu_books/book/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/meedu_books/book/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/meedu_books/book/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/meedu_books/book/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/meedu_books/book/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_books/book/' + params.id, params);
        }
      }
    },
    meeduTopics: {
      Category: {
        List(params) {
          return Ajax.get('/backend/addons/meedu_topics/category/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/meedu_topics/category/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/meedu_topics/category/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/meedu_topics/category/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/meedu_topics/category/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_topics/category/' + params.id, params);
        }
      },
      Topic: {
        List(params) {
          return Ajax.get('/backend/addons/meedu_topics/topic/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/meedu_topics/topic/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/meedu_topics/topic/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/meedu_topics/topic/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/meedu_topics/topic/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_topics/topic/' + params.id, params);
        }
      },
      Comment: {
        Index(params) {
          return Ajax.get('/backend/addons/meedu_topics/comment', params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/meedu_topics/comment/' + params.id, params);
        },
        Check(params) {
          return Ajax.postJson('/backend/addons/meedu_topics/comment/check', params);
        }
      },
      Order: {
        Index(params) {
          return Ajax.get('/backend/addons/meedu_topics/orders', params);
        }
      }
    },
    miaoSha: {
      Goods: {
        List(params) {
          return Ajax.get('/backend/addons/MiaoSha/goods/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/MiaoSha/goods/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/MiaoSha/goods/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/MiaoSha/goods/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/MiaoSha/goods/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/MiaoSha/goods/' + params.id, params);
        }
      },
      Orders: {
        Index(params) {
          return Ajax.get('/backend/addons/MiaoSha/orders/index', params);
        }
      }
    },
    paper: {
      Paper: {
        List(params) {
          return Ajax.get('/backend/addons/Paper/paper/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Paper/paper/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Paper/paper/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Paper/paper/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Paper/paper/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/Paper/paper/' + params.id, params);
        },
        Users(params) {
          return Ajax.get('/backend/addons/Paper/paper/' + params.id + '/user', params);
        },
        Statistics(params) {
          return Ajax.get('/backend/addons/Paper/paper/' + params.id + '/statistics', params);
        },
        UserAdd(params) {
          return Ajax.postJson('/backend/addons/Paper/paper/' + params.id + '/user', params);
        },
        UserDel(params) {
          return Ajax.delete('/backend/addons/Paper/paper/' + params.id + '/user/' + params.user_id);
        },
        Questions(params) {
          return Ajax.get('/backend/addons/Paper/paper/' + params.id + '/questions', params);
        },
        AddQuestions(params) {
          return Ajax.postJson('/backend/addons/Paper/paper/' + params.id + '/questions', params);
        },
        DelQuestion(params) {
          return Ajax.delete('/backend/addons/Paper/paper/' + params.id + '/questions/' + params.question_id);
        },
        UserPapers(params) {
          return Ajax.get(`/backend/addons/Paper/paper/${params.id}/userPaper`, params);
        },
        UserPaperInfo(params) {
          return Ajax.get(`/backend/addons/Paper/paper/${params.id}/userPaper/${params.user_paper_id}`, params);
        },
        SubmitScore(params) {
          return Ajax.postJson(`/backend/addons/Paper/paper/${params.id}/userPaper/${params.user_paper_id}`, params);
        }
      },
      Question: {
        List(params) {
          return Ajax.get('/backend/addons/Paper/question/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Paper/question/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Paper/question/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Paper/question/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Paper/question/' + params.id, params);
        },
        Delete(params) {
          return Ajax.postJson('/backend/addons/Paper/question/destroy/multi', params);
        },
        Import(params) {
          return Ajax.postJson('/backend/addons/Paper/question/import/csv', params);
        }
      },
      QuestionCategory: {
        List(params) {
          return Ajax.get('/backend/addons/Paper/question_category/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Paper/question_category/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Paper/question_category/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Paper/question_category/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Paper/question_category/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/Paper/question_category/' + params.id, params);
        }
      },
      PaperCategory: {
        List(params) {
          return Ajax.get('/backend/addons/Paper/paper_category/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Paper/paper_category/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Paper/paper_category/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Paper/paper_category/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Paper/paper_category/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/Paper/paper_category/' + params.id, params);
        }
      },
      Practice: {
        List(params) {
          return Ajax.get('/backend/addons/Paper/practice/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Paper/practice/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Paper/practice/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Paper/practice/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Paper/practice/' + params.id, params);
        },
        Delete(params) {
          return Ajax.postJson('/backend/addons/Paper/practice/delete/multi', params);
        },
        Users(params) {
          return Ajax.get('/backend/addons/Paper/practice/' + params.id + '/users', params);
        },
        AddUser(params) {
          return Ajax.postJson('/backend/addons/Paper/practice/' + params.id + '/user/insert', params);
        },
        DelUser(params) {
          return Ajax.postJson('/backend/addons/Paper/practice/' + params.id + '/user/delete', params);
        },
        UserProgress(pid, userId) {
          return Ajax.get('/backend/addons/Paper/practice/' + pid + '/user/' + userId + '/progress');
        }
      },
      PracticeChapter: {
        List(params) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Paper/practice_chapter/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Paper/practice_chapter/' + params.id, params);
        },
        Delete(params) {
          return Ajax.postJson('/backend/addons/Paper/practice_chapter/delete/multi', params);
        },
        Questions(params) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + params.id + '/questions', params);
        },
        QuestionsCreate(params) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + params.id + '/questions/params', params);
        },
        QuestionsStore(params) {
          return Ajax.postJson('/backend/addons/Paper/practice_chapter/' + params.id + '/questions', params);
        },
        QuestionsDelete(params) {
          return Ajax.postJson('/backend/addons/Paper/practice_chapter/' + params.id + '/questions/delete', params);
        },
        Users(params) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + params.id + '/users', params);
        },
        UserDetail(params) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + params.id + '/user/detail', params);
        }
      },
      MockPaper: {
        List(params) {
          return Ajax.get('/backend/addons/Paper/mock_paper/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Paper/mock_paper/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Paper/mock_paper/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Paper/mock_paper/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Paper/mock_paper/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/Paper/mock_paper/' + params.id);
        },
        Users(params) {
          return Ajax.get('/backend/addons/Paper/mock_paper/' + params.id + '/users', params);
        },
        Statistics(params) {
          return Ajax.get('/backend/addons/Paper/mock_paper/' + params.id + '/statistics', params);
        },
        Records(params) {
          return Ajax.get('/backend/addons/Paper/mock_paper/' + params.id + '/records', params);
        },
        AddUser(params) {
          return Ajax.postJson('/backend/addons/Paper/mock_paper/' + params.id + '/user/insert', params);
        },
        DelUser(params) {
          return Ajax.postJson('/backend/addons/Paper/mock_paper/' + params.id + '/user/delete', params);
        },
      }
    },
    promoCodeImport: {
      Generate(params) {
        return Ajax.postJson('/backend/addons/promo_code_multi_import/tools/generate', params);
      }
    },
    singlePage: {
      Page: {
        List(params) {
          return Ajax.get('/backend/addons/single_page/page/index', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/single_page/page/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/single_page/page/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/single_page/page/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/single_page/page/' + params.id, params);
        }
      }
    },
    templateOne: {
      Nav: {
        List(params) {
          return Ajax.get('/backend/addons/TemplateOne/nav/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/TemplateOne/nav/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/TemplateOne/nav/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/TemplateOne/nav/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/TemplateOne/nav/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/TemplateOne/nav/' + params.id, params);
        }
      },
      Slider: {
        List(params) {
          return Ajax.get('/backend/addons/TemplateOne/slider/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/TemplateOne/slider/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/TemplateOne/slider/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/TemplateOne/slider/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/TemplateOne/slider/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/TemplateOne/slider/' + params.id, params);
        }
      }
    },
    tencentCloudHls: {
      Setting: {
        Get() {
          return Ajax.get('/backend/addons/TencentCloudHls/setting');
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/TencentCloudHls/setting', params);
        },
        createTemplate(params) {
          return Ajax.get('/backend/addons/TencentCloudHls/createTemplate', params);
        }
      },
      Videos: {
        All(params) {
          return Ajax.get('/backend/addons/TencentCloudHls/videos', params);
        },
        SubmitTransTask(params) {
          return Ajax.get('/backend/addons/TencentCloudHls/videos/submitTransTask', params);
        }
      }
    },
    tuanGou: {
      Goods: {
        List(params) {
          return Ajax.get('/backend/addons/TuanGou/goods/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/TuanGou/goods/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/TuanGou/goods/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/TuanGou/goods/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/TuanGou/goods/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/TuanGou/goods/' + params.id, params);
        },
        Items(params) {
          return Ajax.get('/backend/addons/TuanGou/goods/' + params.id + '/items', params);
        },
        CompleteItem(params) {
          return Ajax.get('/backend/addons/TuanGou/goods/item/complete', params);
        }
      },
      Orders: {
        Index(params) {
          return Ajax.get('/backend/addons/TuanGou/orders/index', params);
        }
      },
      Refunds: {
        Index(params) {
          return Ajax.get('/backend/addons/TuanGou/refunds/index', params);
        },
        Handler(params) {
          return Ajax.get('/backend/addons/TuanGou/refunds/' + params.id + '/handler', params);
        }
      }
    },
    wenda: {
      Category: {
        List(params) {
          return Ajax.get('/backend/addons/Wenda/category/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Wenda/category/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Wenda/category/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Wenda/category/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Wenda/category/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/Wenda/category/' + params.id, params);
        }
      },
      Question: {
        List(params) {
          return Ajax.get('/backend/addons/Wenda/question/index', params);
        },
        Delete(params) {
          return Ajax.postJson('/backend/addons/Wenda/question/delete', params);
        },
        Answers(id) {
          return Ajax.get('/backend/addons/Wenda/question/' + id + '/answers');
        },
        AnswerDelete(questionId, answerId) {
          return Ajax.delete('/backend/addons/Wenda/question/' + questionId + '/answers/' + answerId);
        },
        AnswerSelected(questionId, answerId) {
          return Ajax.get('/backend/addons/Wenda/question/' + questionId + '/answers/' + answerId + '/selected');
        },
        AnswerComments(answerId) {
          return Ajax.get('/backend/addons/Wenda/question/answers/' + answerId + '/comments');
        },
        AnswerCommentDelete(commentId) {
          return Ajax.delete('/backend/addons/Wenda/question/answers/comments/' + commentId);
        }
      }
    },
    zhibo: {
      CourseCategory: {
        List(params) {
          return Ajax.get('/backend/addons/zhibo/course_category/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/zhibo/course_category/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/zhibo/course_category/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/zhibo/course_category/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/zhibo/course_category/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/zhibo/course_category/' + params.id, params);
        }
      },
      Course: {
        List(params) {
          return Ajax.get('/backend/addons/zhibo/course/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/zhibo/course/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/zhibo/course/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/zhibo/course/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/zhibo/course/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/zhibo/course/' + params.id, params);
        },
        Users(params) {
          return Ajax.get('/backend/addons/zhibo/course/' + params.id + '/users', params);
        }
      },
      CourseChapter: {
        List(params) {
          return Ajax.get('/backend/addons/zhibo/course_chapter/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/zhibo/course_chapter/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/zhibo/course_chapter/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/zhibo/course_chapter/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/zhibo/course_chapter/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/zhibo/course_chapter/' + params.id, params);
        }
      },
      Teacher: {
        List(params) {
          return Ajax.get('/backend/addons/zhibo/teacher/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/zhibo/teacher/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/zhibo/teacher/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/zhibo/teacher/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/zhibo/teacher/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/zhibo/teacher/' + params.id, params);
        }
      },
      CourseVideo: {
        List(params) {
          return Ajax.get('/backend/addons/zhibo/course_video/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/zhibo/course_video/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/zhibo/course_video/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/zhibo/course_video/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/zhibo/course_video/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/zhibo/course_video/' + params.id, params);
        },
        WatchUsers(params) {
          return Ajax.get('/backend/addons/zhibo/course_video/watch/users', params);
        }
      },
      CourseComment: {
        List(params) {
          return Ajax.get('/backend/addons/zhibo/course_comment', params);
        },
        Check(params) {
          return Ajax.postJson('/backend/addons/zhibo/course_comment/check', params);
        },
        Delete(params) {
          return Ajax.postJson('/backend/addons/zhibo/course_comment/delete', params);
        },
        Reply(id, replyContent) {
          return Ajax.postJson('/backend/addons/zhibo/course_comment/' + id + '/reply', { reply: replyContent });
        },
      },
      CourseChat: {
        List(params) {
          return Ajax.get('/backend/addons/zhibo/chat/' + params.course_id + '/' + params.video_id, params);
        },
        Delete(params) {
          return Ajax.postJson('/backend/addons/zhibo/chat/delete', params);
        }
      },
      Zhibo: {
        Create(params) {
          return Ajax.get('/backend/addons/zhibo/zhibo/create', params);
        },
        getparams(params) {
          return Ajax.get('/backend/addons/zhibo/zhibo/getparams', params);
        },
        stop(params) {
          return Ajax.get('/backend/addons/zhibo/zhibo/stop', params);
        }
      }
    },
    multiLevelShare: {
      Poster: {
        List(params) {
          return Ajax.get('/backend/addons/multi_level_share/poster/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/multi_level_share/poster/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/multi_level_share/poster/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/multi_level_share/poster/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/multi_level_share/poster/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/multi_level_share/poster/' + params.id, params);
        }
      },
      Goods: {
        List(params) {
          return Ajax.get('/backend/addons/multi_level_share/goods/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/multi_level_share/goods/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/multi_level_share/goods/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/multi_level_share/goods/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/multi_level_share/goods/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/multi_level_share/goods/' + params.id, params);
        }
      }
    },
    xiaoBanKe: {
      Order: {
        Index(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/order', params);
        },
        SetTeacherparams(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/order/teacherparams', params);
        },
        SetTeacher(params) {
          return Ajax.putJson('/backend/addons/XiaoBanKe/order/' + params.id + '/teacher', params);
        }
      },
      Dashboard: {
        Index(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/dashboard', params);
        }
      },
      CourseCategory: {
        List(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/course_category', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/course_category/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/XiaoBanKe/course_category/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/course_category/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/XiaoBanKe/course_category/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/XiaoBanKe/course_category/' + params.id, params);
        }
      },
      Course: {
        List(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/course', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/course/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/XiaoBanKe/course/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/course/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/XiaoBanKe/course/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/XiaoBanKe/course/' + params.id, params);
        }
      },
      Teacher: {
        List(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/teacher', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/teacher/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/XiaoBanKe/teacher/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/XiaoBanKe/teacher/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/XiaoBanKe/teacher/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/XiaoBanKe/teacher/' + params.id, params);
        }
      }
    },
    Snapshot: {
      Images: {
        Index(params) {
          return Ajax.get('/backend/addons/Snapshot/images', params);
        },
        Delete(params) {
          return Ajax.postJson('/backend/addons/Snapshot/images/delete/multi', params);
        }
      }
    },
    CodeExchanger: {
      Goods: {
        Index(params) {
          return Ajax.get('/backend/addons/CodeExchanger/goods', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/CodeExchanger/goods/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/CodeExchanger/goods/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/CodeExchanger/goods/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/CodeExchanger/goods/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/CodeExchanger/goods/' + params.id, params);
        }
      },
      Codes: {
        Index(params) {
          return Ajax.get('/backend/addons/CodeExchanger/codes', params);
        },
        Generate(params) {
          return Ajax.postJson('/backend/addons/CodeExchanger/code/generate', params);
        },
        DeleteMulti(params) {
          return Ajax.postJson('/backend/addons/CodeExchanger/code/delete/multi', params);
        },
        Export() {
          return Ajax.get('/backend/addons/CodeExchanger/code/export');
        }
      }
    },
    Credit1Mall: {
      Goods: {
        Index(params) {
          return Ajax.get('/backend/addons/Credit1Mall/goods/index', params);
        },
        Create(params) {
          return Ajax.get('/backend/addons/Credit1Mall/goods/create', params);
        },
        Store(params) {
          return Ajax.postJson('/backend/addons/Credit1Mall/goods/create', params);
        },
        Edit(params) {
          return Ajax.get('/backend/addons/Credit1Mall/goods/' + params.id);
        },
        Update(params) {
          return Ajax.putJson('/backend/addons/Credit1Mall/goods/' + params.id, params);
        },
        Delete(params) {
          return Ajax.delete('/backend/addons/Credit1Mall/goods/' + params.id, params);
        }
      },
      Order: {
        Index(params) {
          return Ajax.get('/backend/addons/Credit1Mall/orders/index', params);
        },
        Edit(id) {
          return Ajax.get('/backend/addons/Credit1Mall/orders/' + id);
        },
        Update(id, params) {
          return Ajax.putJson('/backend/addons/Credit1Mall/orders/' + id, params);
        },
        Send(id, params) {
          return Ajax.postJson('/backend/addons/Credit1Mall/orders/' + id + '/send', params);
        }
      }
    },
    WorkWeixin: {
      Department() {
        return Ajax.get('/backend/addons/WorkWeixin/department');
      },
      DepartmentUser(params) {
        return Ajax.get('/backend/addons/WorkWeixin/department/users', params);
      },
      DepartmentUpdate() {
        return Ajax.get('/backend/addons/WorkWeixin/department/update');
      }
    }
  }
};

export default Request;
