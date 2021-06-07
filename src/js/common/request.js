import Ajax from './ajax';

const Request = {
  MpWecaht: {
    Menu(param) {
      return Ajax.get('/mpWechat/menu', param);
    },
    MenuUpdate(param) {
      return Ajax.putJson('/mpWechat/menu', param);
    },
    MenuEmpty(param) {
      return Ajax.delete('/mpWechat/menu', param);
    }
  },
  MpWechatMessageReply: {
    List(param) {
      return Ajax.get('/mpWechatMessageReply', param);
    },
    Create(param) {
      return Ajax.get('/mpWechatMessageReply/create', param);
    },
    Store(param) {
      return Ajax.postJson('/mpWechatMessageReply', param);
    },
    Edit(param) {
      return Ajax.get('/mpWechatMessageReply/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/mpWechatMessageReply/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/mpWechatMessageReply/' + param.id, param);
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
    repository(param) {
      return Ajax.get('/addons/repository', param);
    },
    user(param) {
      return Ajax.get('/addons/repository/user', param);
    },
    buy(param) {
      return Ajax.get('/addons/repository/buy', param);
    },
    install(param) {
      return Ajax.get('/addons/repository/install', param);
    },
    upgrade(param) {
      return Ajax.get('/addons/repository/upgrade', param);
    },
    switchHandler(param) {
      return Ajax.postJson('/addons/switch', param);
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
    login(param) {
      return Ajax.postJson('/login', param);
    }
  },
  Announcement: {
    List(param) {
      return Ajax.get('/announcement', param);
    },
    Store(param) {
      return Ajax.postJson('/announcement', param);
    },
    Edit(param) {
      return Ajax.get('/announcement/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/announcement/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/announcement/' + param.id, param);
    }
  },
  CourseCategory: {
    List(param) {
      return Ajax.get('/courseCategory', param);
    },
    Create(param) {
      return Ajax.postJson('/courseCategory', param);
    },
    Edit(param) {
      return Ajax.get('/courseCategory/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/courseCategory/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/courseCategory/' + param.id, param);
    }
  },
  Role: {
    List(param) {
      return Ajax.get('/role', param);
    },
    All(param) {
      return Ajax.get('/role/all', param);
    },
    Store(param) {
      return Ajax.postJson('/role', param);
    },
    Edit(param) {
      return Ajax.get('/role/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/role/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/role/' + param.id, param);
    }
  },
  Link: {
    List(param) {
      return Ajax.get('/link', param);
    },
    Store(param) {
      return Ajax.postJson('/link', param);
    },
    Edit(param) {
      return Ajax.get('/link/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/link/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/link/' + param.id, param);
    }
  },
  Slider: {
    List(param) {
      return Ajax.get('/slider', param);
    },
    Store(param) {
      return Ajax.postJson('/slider', param);
    },
    Edit(param) {
      return Ajax.get('/slider/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/slider/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/slider/' + param.id, param);
    }
  },
  IndexBanner: {
    List(param) {
      return Ajax.get('/indexBanner', param);
    },
    Create() {
      return Ajax.get('/indexBanner/create');
    },
    Store(param) {
      return Ajax.postJson('/indexBanner', param);
    },
    Edit(param) {
      return Ajax.get('/indexBanner/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/indexBanner/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/indexBanner/' + param.id, param);
    }
  },
  AdFrom: {
    List(param) {
      return Ajax.get('/ad_from', param);
    },
    Store(param) {
      return Ajax.postJson('/ad_from', param);
    },
    Edit(param) {
      return Ajax.get('/ad_from/' + param.id);
    },
    Number(param) {
      return Ajax.get('/ad_from/' + param.id + '/number');
    },
    Update(param) {
      return Ajax.putJson('/ad_from/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/ad_from/' + param.id, param);
    }
  },
  CourseComment: {
    List(param) {
      return Ajax.get('/course_comment', param);
    },
    Delete(param) {
      return Ajax.postJson('/course_comment/delete', param);
    }
  },
  VideoComment: {
    List(param) {
      return Ajax.get('/video_comment', param);
    },
    Delete(param) {
      return Ajax.postJson('/video_comment/delete', param);
    }
  },
  Order: {
    List(param) {
      return Ajax.get('/order', param);
    },
    Detail(param) {
      return Ajax.get('/order/' + param.id, param);
    },
    Finish(param) {
      return Ajax.get('/order/' + param.id + '/finish', param);
    }
  },
  Member: {
    List(param) {
      return Ajax.get('/member', param);
    },
    Create() {
      return Ajax.get('/member');
    },
    Store(param) {
      return Ajax.postJson('/member', param);
    },
    Edit(param) {
      return Ajax.get('/member/' + param.id, param);
    },
    Update(param) {
      return Ajax.putJson('/member/' + param.id, param);
    },
    InviteBalanceWithdrawOrders(param) {
      return Ajax.get('/member/inviteBalance/withdrawOrders', param);
    },
    CreateInviteBalanceWithdrawOrder(param) {
      return Ajax.postJson('/member/inviteBalance/withdrawOrders', param);
    },
    Detail(param) {
      return Ajax.get('/member/' + param.id + '/detail', param);
    },
    Courses(param) {
      return Ajax.get('/member/' + param.id + '/detail/userCourses', param);
    },
    Videos(param) {
      return Ajax.get('/member/' + param.id + '/detail/userVideos', param);
    },
    Roles(param) {
      return Ajax.get('/member/' + param.id + '/detail/userRoles', param);
    },
    Collect(param) {
      return Ajax.get('/member/' + param.id + '/detail/userCollect', param);
    },
    History(param) {
      return Ajax.get('/member/' + param.id + '/detail/userHistory', param);
    },
    Orders(param) {
      return Ajax.get('/member/' + param.id + '/detail/userOrders', param);
    },
    Invite(param) {
      return Ajax.get('/member/' + param.id + '/detail/userInvite', param);
    },
    Credit1Records(param) {
      return Ajax.get('/member/' + param.id + '/detail/credit1Records', param);
    },
    Credit1Change(param) {
      return Ajax.postJson('/member/credit1/change', param);
    },
    Tags(param) {
      return Ajax.putJson('/member/' + param.id + '/tags', param);
    },
    Remark(param) {
      return Ajax.get('/member/' + param.id + '/remark', param);
    },
    RemarkUpdate(param) {
      return Ajax.putJson('/member/' + param.id + '/remark', param);
    },
    SendMessage(id, message) {
      return Ajax.postJson('/member/' + id + '/message', { message: message });
    },
    VideoWatchRecords(param) {
      return Ajax.get('/member/' + param.id + '/detail/videoWatchRecords', param);
    },
    Import(params) {
      return Ajax.postJson('/member/import', params);
    }
  },
  Course: {
    List(param) {
      return Ajax.get('/course', param);
    },
    All(param) {
      return Ajax.get('/course/all', param);
    },
    CreateParams(param) {
      return Ajax.get('/course/create', param);
    },
    Create(param) {
      return Ajax.postJson('/course', param);
    },
    Edit(param) {
      return Ajax.get('/course/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/course/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/course/' + param.id, param);
    },
    WatchRecords(param) {
      return Ajax.get('/course/' + param.id + '/watch/records', param);
    },
    Subscribes(param) {
      return Ajax.get('/course/' + param.course_id + '/subscribes', param);
    },
    SubscribeDelete(param) {
      return Ajax.get('/course/' + param.course_id + '/subscribe/delete', param);
    },
    SubscribeCreate(param) {
      return Ajax.postJson('/course/' + param.course_id + '/subscribe/create', param);
    },
    VideoWatchRecords(courseId, userId) {
      return Ajax.get('/course/' + courseId + '/user/' + userId + '/watch/records');
    }
  },
  CourseAttach: {
    List(param) {
      return Ajax.get('/course_attach', param);
    },
    Store(param) {
      return Ajax.postJson('/course_attach', param);
    },
    Delete(param) {
      return Ajax.delete('/course_attach/' + param.id, param);
    }
  },
  Video: {
    List(param) {
      return Ajax.get('/video', param);
    },
    Create() {
      return Ajax.get('/video/create');
    },
    Store(param) {
      return Ajax.postJson('/video', param);
    },
    Edit(param) {
      return Ajax.get('/video/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/video/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/video/' + param.id, param);
    },
    MultiDelete(param) {
      return Ajax.post('/video/delete/multi', param);
    },
    Subscribes(param) {
      return Ajax.get('/video/' + param.video_id + '/subscribes', param);
    },
    SubscribeCreate(param) {
      return Ajax.postJson('/video/' + param.video_id + '/subscribe/create', param);
    },
    SubscribeDelete(param) {
      return Ajax.get('/video/' + param.video_id + '/subscribe/delete', param);
    },
    WatchRecords(param) {
      return Ajax.get('/video/' + param.video_id + '/watch/records', param);
    },
    Import(param) {
      return Ajax.postJson('/video/import', param);
    }
  },
  CourseChapter: {
    List(param) {
      return Ajax.get('/course_chapter/' + param.course_id, param);
    },
    Create(param) {
      return Ajax.postJson('/course_chapter/' + param.course_id, param);
    },
    Edit(param) {
      return Ajax.get('/course_chapter/' + param.course_id + '/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/course_chapter/' + param.course_id + '/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/course_chapter/' + param.course_id + '/' + param.id);
    }
  },
  Setting: {
    Get() {
      return Ajax.get('/setting');
    },
    Save(param) {
      return Ajax.postJson('/setting', param);
    }
  },
  Administrator: {
    List(param) {
      return Ajax.get('/administrator', param);
    },
    Create(param) {
      return Ajax.get('/administrator/create', param);
    },
    Store(param) {
      return Ajax.postJson('/administrator', param);
    },
    Edit(param) {
      return Ajax.get('/administrator/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/administrator/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/administrator/' + param.id, param);
    },
    ChangePassword(param) {
      return Ajax.putJson('/administrator/password', param);
    }
  },
  AdministratorRole: {
    List(param) {
      return Ajax.get('/administrator_role', param);
    },
    Create(param) {
      return Ajax.get('/administrator_role/create', param);
    },
    Store(param) {
      return Ajax.postJson('/administrator_role', param);
    },
    Edit(param) {
      return Ajax.get('/administrator_role/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/administrator_role/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/administrator_role/' + param.id, param);
    }
  },
  AdministratorPermission: {
    List(param) {
      return Ajax.get('/administrator_permission', param);
    },
    Create(param) {
      return Ajax.postJson('/administrator_permission', param);
    },
    Edit(param) {
      return Ajax.get('/administrator_permission/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/administrator_permission/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/administrator_permission/' + param.id, param);
    }
  },
  Nav: {
    List(param) {
      return Ajax.get('/nav', param);
    },
    Create(param) {
      return Ajax.get('/nav/create', param);
    },
    Store(param) {
      return Ajax.postJson('/nav', param);
    },
    Edit(param) {
      return Ajax.get('/nav/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/nav/' + param.id, param);
    },
    Delete(param) {
      return Ajax.delete('/nav/' + param.id, param);
    }
  },
  Statistic: {
    userRegister(param) {
      return Ajax.get('/statistic/userRegister', param);
    },
    orderCreated(param) {
      return Ajax.get('/statistic/orderCreated', param);
    },
    orderPaidCount(param) {
      return Ajax.get('/statistic/orderPaidCount', param);
    },
    orderPaidSum(param) {
      return Ajax.get('/statistic/orderPaidSum', param);
    },
    courseSell(param) {
      return Ajax.get('/statistic/courseSell', param);
    },
    roleSell(param) {
      return Ajax.get('/statistic/roleSell', param);
    },
    videoWatchDuration(param) {
      return Ajax.get('/statistic/videoWatchDuration', param);
    },
    courseWatchDuration(param) {
      return Ajax.get('/statistic/courseWatchDuration', param);
    }
  },
  PromoCode: {
    List(param) {
      return Ajax.get('/promoCode', param);
    },
    Create(param) {
      return Ajax.postJson('/promoCode', param);
    },
    Edit(param) {
      return Ajax.get('/promoCode/' + param.id);
    },
    Update(param) {
      return Ajax.putJson('/promoCode/' + param.id, param);
    },
    Delete(param) {
      return Ajax.postJson('/promoCode/delete/multi', param);
    },
    Import(param) {
      return Ajax.postJson('/promoCode/import', param);
    },
    Generator(param) {
      return Ajax.postJson('/promoCode/generator', param);
    }
  },
  VideoUpload: {
    AliyunAuthTokenRefresh(param) {
      return Ajax.postJson('/video/token/aliyun/refresh', param);
    },
    AliyunAuthTokenCreate(param) {
      return Ajax.postJson('/video/token/aliyun/create', param);
    },
    TencentAuthToken(param) {
      return Ajax.postJson('/video/token/tencent', param);
    }
  },
  Upload: {
    ImageDownload(param) {
      return Ajax.postJson('/upload/image/download', param);
    }
  },
  Extentions: {
    aliyunHls: {
      Setting: {
        Get() {
          return Ajax.get('/backend/addons/AliyunHls/setting');
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/AliyunHls/setting', param);
        }
      },
      Videos: {
        All(param) {
          return Ajax.get('/backend/addons/AliyunHls/videos', param);
        },
        SubmitTransTask(param) {
          return Ajax.postJson('/backend/addons/AliyunHls/videos/submitTransTask', param);
        }
      }
    },
    aliyunVideosImport: {
      Params() {
        return Ajax.get('/backend/addons/aliyun_videos_import/params');
      },
      Import(params) {
        return Ajax.post('/backend/addons/aliyun_videos_import/import', params);
      }
    },
    learningPaths: {
      Paths: {
        List(param) {
          return Ajax.get('/backend/addons/LearningPaths/path/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/LearningPaths/path/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/LearningPaths/path/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/LearningPaths/path/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/LearningPaths/path/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/LearningPaths/path/' + param.id, param);
        }
      },
      Steps: {
        List(param) {
          return Ajax.get('/backend/addons/LearningPaths/step/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/LearningPaths/step/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/LearningPaths/step/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/LearningPaths/step/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/LearningPaths/step/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/LearningPaths/step/' + param.id, param);
        }
      },
      Relation: {
        List(param) {
          return Ajax.get('/backend/addons/LearningPaths/step/relation/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/LearningPaths/step/relation/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/LearningPaths/step/relation/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/LearningPaths/step/relation/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/LearningPaths/step/relation/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/LearningPaths/step/relation/' + param.id, param);
        }
      }
    },
    meeduBooks: {
      BookComment: {
        Index(param) {
          return Ajax.get('/backend/addons/meedu_books/book_comment/index', param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_books/book_comment/' + param.id, param);
        },
        Checked(param) {
          return Ajax.postJson('/backend/addons/meedu_books/book_comment/checked', param);
        }
      },
      ArticleComment: {
        Index(param) {
          return Ajax.get('/backend/addons/meedu_books/article_comment/index', param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_books/article_comment/' + param.id, param);
        },
        Checked(param) {
          return Ajax.postJson('/backend/addons/meedu_books/article_comment/checked', param);
        }
      },
      Category: {
        List(param) {
          return Ajax.get('/backend/addons/meedu_books/book_category/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/meedu_books/book_category/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/meedu_books/book_category/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/meedu_books/book_category/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/meedu_books/book_category/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_books/book_category/' + param.id, param);
        }
      },
      Chapter: {
        List(param) {
          return Ajax.get('/backend/addons/meedu_books/book_chapter/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/meedu_books/book_chapter/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/meedu_books/book_chapter/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/meedu_books/book_chapter/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/meedu_books/book_chapter/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_books/book_chapter/' + param.id, param);
        }
      },
      Article: {
        List(param) {
          return Ajax.get('/backend/addons/meedu_books/book_article/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/meedu_books/book_article/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/meedu_books/book_article/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/meedu_books/book_article/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/meedu_books/book_article/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_books/book_article/' + param.id, param);
        }
      },
      Book: {
        List(param) {
          return Ajax.get('/backend/addons/meedu_books/book/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/meedu_books/book/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/meedu_books/book/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/meedu_books/book/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/meedu_books/book/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_books/book/' + param.id, param);
        }
      }
    },
    meeduTopics: {
      Category: {
        List(param) {
          return Ajax.get('/backend/addons/meedu_topics/category/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/meedu_topics/category/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/meedu_topics/category/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/meedu_topics/category/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/meedu_topics/category/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_topics/category/' + param.id, param);
        }
      },
      Topic: {
        List(param) {
          return Ajax.get('/backend/addons/meedu_topics/topic/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/meedu_topics/topic/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/meedu_topics/topic/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/meedu_topics/topic/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/meedu_topics/topic/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_topics/topic/' + param.id, param);
        }
      },
      Comment: {
        Index(param) {
          return Ajax.get('/backend/addons/meedu_topics/comment', param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/meedu_topics/comment/' + param.id, param);
        },
        Check(param) {
          return Ajax.postJson('/backend/addons/meedu_topics/comment/check', param);
        }
      },
      Order: {
        Index(param) {
          return Ajax.get('/backend/addons/meedu_topics/orders', param);
        }
      }
    },
    miaoSha: {
      Goods: {
        List(param) {
          return Ajax.get('/backend/addons/MiaoSha/goods/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/MiaoSha/goods/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/MiaoSha/goods/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/MiaoSha/goods/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/MiaoSha/goods/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/MiaoSha/goods/' + param.id, param);
        }
      },
      Orders: {
        Index(param) {
          return Ajax.get('/backend/addons/MiaoSha/orders/index', param);
        }
      }
    },
    paper: {
      Paper: {
        List(param) {
          return Ajax.get('/backend/addons/Paper/paper/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Paper/paper/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Paper/paper/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/Paper/paper/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Paper/paper/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/Paper/paper/' + param.id, param);
        },
        Users(param) {
          return Ajax.get('/backend/addons/Paper/paper/' + param.id + '/user', param);
        },
        Statistics(param) {
          return Ajax.get('/backend/addons/Paper/paper/' + param.id + '/statistics', param);
        },
        UserAdd(param) {
          return Ajax.postJson('/backend/addons/Paper/paper/' + param.id + '/user', param);
        },
        UserDel(param) {
          return Ajax.delete('/backend/addons/Paper/paper/' + param.id + '/user/' + param.user_id);
        },
        Questions(param) {
          return Ajax.get('/backend/addons/Paper/paper/' + param.id + '/questions', param);
        },
        AddQuestions(param) {
          return Ajax.postJson('/backend/addons/Paper/paper/' + param.id + '/questions', param);
        },
        DelQuestion(param) {
          return Ajax.delete('/backend/addons/Paper/paper/' + param.id + '/questions/' + param.question_id);
        },
        UserPapers(param) {
          return Ajax.get(`/backend/addons/Paper/paper/${param.id}/userPaper`, param);
        },
        UserPaperInfo(param) {
          return Ajax.get(`/backend/addons/Paper/paper/${param.id}/userPaper/${param.user_paper_id}`, param);
        },
        SubmitScore(param) {
          return Ajax.postJson(`/backend/addons/Paper/paper/${param.id}/userPaper/${param.user_paper_id}`, param);
        }
      },
      Question: {
        List(param) {
          return Ajax.get('/backend/addons/Paper/question/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Paper/question/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Paper/question/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/Paper/question/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Paper/question/' + param.id, param);
        },
        Delete(param) {
          return Ajax.postJson('/backend/addons/Paper/question/destroy/multi', param);
        },
        Import(param) {
          return Ajax.postJson('/backend/addons/Paper/question/import/csv', param);
        }
      },
      QuestionCategory: {
        List(param) {
          return Ajax.get('/backend/addons/Paper/question_category/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Paper/question_category/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Paper/question_category/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/Paper/question_category/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Paper/question_category/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/Paper/question_category/' + param.id, param);
        }
      },
      PaperCategory: {
        List(param) {
          return Ajax.get('/backend/addons/Paper/paper_category/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Paper/paper_category/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Paper/paper_category/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/Paper/paper_category/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Paper/paper_category/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/Paper/paper_category/' + param.id, param);
        }
      },
      Practice: {
        List(param) {
          return Ajax.get('/backend/addons/Paper/practice/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Paper/practice/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Paper/practice/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/Paper/practice/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Paper/practice/' + param.id, param);
        },
        Delete(param) {
          return Ajax.postJson('/backend/addons/Paper/practice/delete/multi', param);
        },
        Users(param) {
          return Ajax.get('/backend/addons/Paper/practice/' + param.id + '/users', param);
        },
        AddUser(param) {
          return Ajax.postJson('/backend/addons/Paper/practice/' + param.id + '/user/insert', param);
        },
        DelUser(param) {
          return Ajax.postJson('/backend/addons/Paper/practice/' + param.id + '/user/delete', param);
        },
        UserProgress(pid, userId) {
          return Ajax.get('/backend/addons/Paper/practice/' + pid + '/user/' + userId + '/progress');
        }
      },
      PracticeChapter: {
        List(param) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Paper/practice_chapter/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Paper/practice_chapter/' + param.id, param);
        },
        Delete(param) {
          return Ajax.postJson('/backend/addons/Paper/practice_chapter/delete/multi', param);
        },
        Questions(param) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + param.id + '/questions', param);
        },
        QuestionsCreate(param) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + param.id + '/questions/params', param);
        },
        QuestionsStore(param) {
          return Ajax.postJson('/backend/addons/Paper/practice_chapter/' + param.id + '/questions', param);
        },
        QuestionsDelete(param) {
          return Ajax.postJson('/backend/addons/Paper/practice_chapter/' + param.id + '/questions/delete', param);
        },
        Users(param) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + param.id + '/users', param);
        },
        UserDetail(param) {
          return Ajax.get('/backend/addons/Paper/practice_chapter/' + param.id + '/user/detail', param);
        }
      },
      MockPaper: {
        List(param) {
          return Ajax.get('/backend/addons/Paper/mock_paper/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Paper/mock_paper/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Paper/mock_paper/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/Paper/mock_paper/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Paper/mock_paper/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/Paper/mock_paper/' + param.id);
        },
        Users(param) {
          return Ajax.get('/backend/addons/Paper/mock_paper/' + param.id + '/users', param);
        },
        Statistics(param) {
          return Ajax.get('/backend/addons/Paper/mock_paper/' + param.id + '/statistics', param);
        },
        Records(param) {
          return Ajax.get('/backend/addons/Paper/mock_paper/' + param.id + '/records', param);
        },
        AddUser(param) {
          return Ajax.postJson('/backend/addons/Paper/mock_paper/' + param.id + '/user/insert', param);
        },
        DelUser(param) {
          return Ajax.postJson('/backend/addons/Paper/mock_paper/' + param.id + '/user/delete', param);
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
        List(param) {
          return Ajax.get('/backend/addons/single_page/page/index', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/single_page/page/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/single_page/page/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/single_page/page/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/single_page/page/' + param.id, param);
        }
      }
    },
    templateOne: {
      Nav: {
        List(param) {
          return Ajax.get('/backend/addons/TemplateOne/nav/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/TemplateOne/nav/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/TemplateOne/nav/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/TemplateOne/nav/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/TemplateOne/nav/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/TemplateOne/nav/' + param.id, param);
        }
      },
      Slider: {
        List(param) {
          return Ajax.get('/backend/addons/TemplateOne/slider/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/TemplateOne/slider/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/TemplateOne/slider/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/TemplateOne/slider/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/TemplateOne/slider/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/TemplateOne/slider/' + param.id, param);
        }
      }
    },
    tencentCloudHls: {
      Setting: {
        Get() {
          return Ajax.get('/backend/addons/TencentCloudHls/setting');
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/TencentCloudHls/setting', param);
        },
        createTemplate(param) {
          return Ajax.get('/backend/addons/TencentCloudHls/createTemplate', param);
        }
      },
      Videos: {
        All(param) {
          return Ajax.get('/backend/addons/TencentCloudHls/videos', param);
        },
        SubmitTransTask(param) {
          return Ajax.get('/backend/addons/TencentCloudHls/videos/submitTransTask', param);
        }
      }
    },
    tuanGou: {
      Goods: {
        List(param) {
          return Ajax.get('/backend/addons/TuanGou/goods/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/TuanGou/goods/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/TuanGou/goods/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/TuanGou/goods/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/TuanGou/goods/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/TuanGou/goods/' + param.id, param);
        },
        Items(param) {
          return Ajax.get('/backend/addons/TuanGou/goods/' + param.id + '/items', param);
        },
        CompleteItem(param) {
          return Ajax.get('/backend/addons/TuanGou/goods/item/complete', param);
        }
      },
      Orders: {
        Index(param) {
          return Ajax.get('/backend/addons/TuanGou/orders/index', param);
        }
      },
      Refunds: {
        Index(param) {
          return Ajax.get('/backend/addons/TuanGou/refunds/index', param);
        },
        Handler(param) {
          return Ajax.get('/backend/addons/TuanGou/refunds/' + param.id + '/handler', param);
        }
      }
    },
    wenda: {
      Category: {
        List(param) {
          return Ajax.get('/backend/addons/Wenda/category/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Wenda/category/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Wenda/category/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/Wenda/category/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Wenda/category/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/Wenda/category/' + param.id, param);
        }
      },
      Question: {
        List(param) {
          return Ajax.get('/backend/addons/Wenda/question/index', param);
        },
        Delete(param) {
          return Ajax.postJson('/backend/addons/Wenda/question/delete', param);
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
        List(param) {
          return Ajax.get('/backend/addons/zhibo/course_category/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/zhibo/course_category/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/zhibo/course_category/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/zhibo/course_category/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/zhibo/course_category/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/zhibo/course_category/' + param.id, param);
        }
      },
      Course: {
        List(param) {
          return Ajax.get('/backend/addons/zhibo/course/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/zhibo/course/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/zhibo/course/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/zhibo/course/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/zhibo/course/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/zhibo/course/' + param.id, param);
        },
        Users(param) {
          return Ajax.get('/backend/addons/zhibo/course/' + param.id + '/users', param);
        }
      },
      CourseChapter: {
        List(param) {
          return Ajax.get('/backend/addons/zhibo/course_chapter/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/zhibo/course_chapter/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/zhibo/course_chapter/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/zhibo/course_chapter/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/zhibo/course_chapter/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/zhibo/course_chapter/' + param.id, param);
        }
      },
      Teacher: {
        List(param) {
          return Ajax.get('/backend/addons/zhibo/teacher/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/zhibo/teacher/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/zhibo/teacher/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/zhibo/teacher/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/zhibo/teacher/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/zhibo/teacher/' + param.id, param);
        }
      },
      CourseVideo: {
        List(param) {
          return Ajax.get('/backend/addons/zhibo/course_video/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/zhibo/course_video/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/zhibo/course_video/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/zhibo/course_video/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/zhibo/course_video/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/zhibo/course_video/' + param.id, param);
        },
        WatchUsers(param) {
          return Ajax.get('/backend/addons/zhibo/course_video/watch/users', param);
        }
      },
      CourseComment: {
        List(param) {
          return Ajax.get('/backend/addons/zhibo/course_comment', param);
        },
        Check(param) {
          return Ajax.postJson('/backend/addons/zhibo/course_comment/check', param);
        },
        Delete(param) {
          return Ajax.postJson('/backend/addons/zhibo/course_comment/delete', param);
        },
        Reply(id, replyContent) {
          return Ajax.postJson('/backend/addons/zhibo/course_comment/' + id + '/reply', { reply: replyContent });
        },
      },
      CourseChat: {
        List(param) {
          return Ajax.get('/backend/addons/zhibo/chat/' + param.course_id + '/' + param.video_id, param);
        },
        Delete(param) {
          return Ajax.postJson('/backend/addons/zhibo/chat/delete', param);
        }
      },
      Zhibo: {
        Create(param) {
          return Ajax.get('/backend/addons/zhibo/zhibo/create', param);
        },
        getParams(param) {
          return Ajax.get('/backend/addons/zhibo/zhibo/getParams', param);
        },
        stop(param) {
          return Ajax.get('/backend/addons/zhibo/zhibo/stop', param);
        }
      }
    },
    multiLevelShare: {
      Poster: {
        List(param) {
          return Ajax.get('/backend/addons/multi_level_share/poster/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/multi_level_share/poster/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/multi_level_share/poster/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/multi_level_share/poster/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/multi_level_share/poster/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/multi_level_share/poster/' + param.id, param);
        }
      },
      Goods: {
        List(param) {
          return Ajax.get('/backend/addons/multi_level_share/goods/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/multi_level_share/goods/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/multi_level_share/goods/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/multi_level_share/goods/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/multi_level_share/goods/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/multi_level_share/goods/' + param.id, param);
        }
      }
    },
    xiaoBanKe: {
      Order: {
        Index(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/order', param);
        },
        SetTeacherParams(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/order/teacherParams', param);
        },
        SetTeacher(param) {
          return Ajax.putJson('/backend/addons/XiaoBanKe/order/' + param.id + '/teacher', param);
        }
      },
      Dashboard: {
        Index(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/dashboard', param);
        }
      },
      CourseCategory: {
        List(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/course_category', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/course_category/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/XiaoBanKe/course_category/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/course_category/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/XiaoBanKe/course_category/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/XiaoBanKe/course_category/' + param.id, param);
        }
      },
      Course: {
        List(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/course', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/course/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/XiaoBanKe/course/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/course/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/XiaoBanKe/course/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/XiaoBanKe/course/' + param.id, param);
        }
      },
      Teacher: {
        List(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/teacher', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/teacher/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/XiaoBanKe/teacher/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/XiaoBanKe/teacher/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/XiaoBanKe/teacher/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/XiaoBanKe/teacher/' + param.id, param);
        }
      }
    },
    Snapshot: {
      Images: {
        Index(param) {
          return Ajax.get('/backend/addons/Snapshot/images', param);
        },
        Delete(param) {
          return Ajax.postJson('/backend/addons/Snapshot/images/delete/multi', param);
        }
      }
    },
    CodeExchanger: {
      Goods: {
        Index(param) {
          return Ajax.get('/backend/addons/CodeExchanger/goods', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/CodeExchanger/goods/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/CodeExchanger/goods/create', param);
        },
        Edit(param) {
          return Ajax.get('/backend/addons/CodeExchanger/goods/' + param.id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/CodeExchanger/goods/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/CodeExchanger/goods/' + param.id, param);
        }
      },
      Codes: {
        Index(param) {
          return Ajax.get('/backend/addons/CodeExchanger/codes', param);
        },
        Generate(param) {
          return Ajax.postJson('/backend/addons/CodeExchanger/code/generate', param);
        },
        DeleteMulti(param) {
          return Ajax.postJson('/backend/addons/CodeExchanger/code/delete/multi', param);
        },
        Export() {
          return Ajax.get('/backend/addons/CodeExchanger/code/export');
        }
      }
    },
    Platform: {
      Company: {
        List(param) {
          return Ajax.get('/backend/addons/Platform/company/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Platform/company/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Platform/company/create', param);
        },
        Edit(id) {
          return Ajax.get('/backend/addons/Platform/company/' + id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Platform/company/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/Platform/company/' + param.id);
        }
      },
      Anno: {
        List(param) {
          return Ajax.get('/backend/addons/Platform/anno/index', param);
        },
        Create(param) {
          return Ajax.get('/backend/addons/Platform/anno/create', param);
        },
        Store(param) {
          return Ajax.postJson('/backend/addons/Platform/anno/create', param);
        },
        Edit(id) {
          return Ajax.get('/backend/addons/Platform/anno/' + id);
        },
        Update(param) {
          return Ajax.putJson('/backend/addons/Platform/anno/' + param.id, param);
        },
        Delete(param) {
          return Ajax.delete('/backend/addons/Platform/anno/' + param.id);
        }
      }
    }
  }
};

export default Request;
