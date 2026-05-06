//Wed May 06 2026 02:48:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x11c641 = new _0x19feb6("掌上鹿城");
_0x41b0d7();
const _0xcc36bd = "zslc",
  _0x311511 = require("request"),
  _0xae2324 = require("fs"),
  _0x5c3e36 = require("form-data"),
  _0x2b8669 = require("./utils");
let _0x550e84 = "",
  _0x5c0155 = "https://appshare.66lc.com/webChannels/invite?inviteCode=HNQSC9&tenantId=28&accountId=647b32668bee4a66b9b1e82b",
  _0x415d0c = "幻生提示：有错请在仓库建立issue，说明运行环境：青龙版本、机器是 本地机器、服务器 还是 手机面具模块；附上运行截图，谢谢",
  _0x4cb93c = "请在 配置文件 里添加 " + _0xcc36bd + " 变量，具体配置请看脚本最上方说明\n注册地址：" + _0x5c0155 + "\n投稿？请建Issue 或者 +Q：3385445213";
const _0x38564e = Number.isInteger(_0x11c641.isNode() ? process.env[_0xcc36bd + "enabledNotify"] : _0x11c641.getdata(_0xcc36bd + "EnabledNotify")) || Number.isInteger(_0x11c641.isNode() ? process.env.enabledNotify : _0x11c641.getdata("enabledNotify")) || 1;
let _0x2f3b9b = 0,
  _0x8e0686 = ["@", "\n"],
  _0x1e42c0 = (_0x11c641.isNode() ? process.env[_0xcc36bd] : _0x11c641.getdata(_0xcc36bd)) || "",
  _0x2cc526 = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "EnabledPostComment"] : _0x11c641.getdata(_0xcc36bd + "EnabledPostComment")) || false;
!_0x2cc526 && !["0", 0, "false"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "EnabledPostComment"] : _0x11c641.getdata(_0xcc36bd + "EnabledPostComment")) && (_0x2cc526 = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env.huanshengEnabledPostComment : _0x11c641.getdata("huanshengEnabledPostComment")));
let _0x52a1c = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "EnabledForumPost"] : _0x11c641.getdata(_0xcc36bd + "EnabledForumPost")) || false;
!_0x52a1c && !["0", 0, "false"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "EnabledForumPost"] : _0x11c641.getdata(_0xcc36bd + "EnabledForumPost")) && (_0x52a1c = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env.huanshengEnabledForumPost : _0x11c641.getdata("huanshengEnabledForumPost")));
let _0x26c073 = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "EnabledForumPostComment"] : _0x11c641.getdata(_0xcc36bd + "EnabledForumPostComment")) || false;
!_0x26c073 && !["0", 0, "false"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "EnabledForumPostComment"] : _0x11c641.getdata(_0xcc36bd + "EnabledForumPostComment")) && (_0x26c073 = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env.huanshengEnabledForumPostComment : _0x11c641.getdata("huanshengEnabledForumPostComment")));
let _0xa7fc3b = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "EnabledPostCommentBy1Y"] : _0x11c641.getdata(_0xcc36bd + "EnabledPostCommentBy1Y")) || false;
!_0xa7fc3b && !["0", 0, "false"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "EnabledPostCommentBy1Y"] : _0x11c641.getdata(_0xcc36bd + "EnabledPostCommentBy1Y")) && (_0xa7fc3b = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env.huanshengEnabledPostCommentBy1Y : _0x11c641.getdata("huanshengEnabledPostCommentBy1Y")));
let _0x35c7bb = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "ForceLikeAndShare"] : _0x11c641.getdata(_0xcc36bd + "ForceLikeAndShare")) || false,
  _0xae4d35 = [],
  _0xb46962 = 0,
  _0x5e01b1 = 0,
  _0x1ff788 = "HNQSC9",
  _0x50287b = "43",
  _0x298a48 = 28,
  _0x4845df = "vapp.tmuyun.com",
  _0x43f551 = "请注意：已" + (_0x2cc526 ? "开启" : "关闭") + " 对文章的评论功能； 已" + (_0x52a1c ? "开启" : "关闭") + " 论坛发帖功能； 已" + (_0x26c073 ? "开启" : "关闭") + " 论坛发帖评论功能； 已" + (_0xa7fc3b ? "开启" : "关闭") + " 一言随机评论功能； 已" + (_0xa7fc3b ? "开启" : "关闭") + " 强制点赞/分享功能（强行点不一定能加分）",
  _0x1f2c59 = "63777162fe3fc118b09fab89",
  _0x420f6e = ["赞", "👍", "😄", "111", "支持", "点赞"],
  _0x35be5a = "1.1.9;00000000-67f7-45bf-ffff-ffffa7397b83;Xiaomi MI 8 Lite;Android;10;Release",
  _0x2d4e05 = ["5d5361fb1b011b137b853d34"],
  _0x2f0495 = ["1", 1, "true"]?.["includes"](_0x11c641.isNode() ? process.env[_0xcc36bd + "OldConfigTranform"] : _0x11c641.getdata(_0xcc36bd + "OldConfigTranform")) || false,
  _0x1bec66 = "",
  _0x4eb827 = "";
async function _0x22d910() {
  console.log("\n================== 用户登录 帐号数：[" + _0xae4d35?.["length"] + "]==================\n");
  let _0x75130b = [];
  for (let _0x4876b2 of _0xae4d35) {
    _0x75130b.push(await _0x4876b2.app_start("APP启动"));
    await _0x16893f(0.2);
    _0x75130b.push(await _0x4876b2.iframe_start("Iframe启动"));
    await _0x16893f(0.2);
    _0x75130b.push(await _0x4876b2.web_start("Web启动"));
    await _0x16893f(0.2);
    _0x75130b.push(await _0x4876b2.get_app_version("获取Version"));
    await _0x16893f(0.2);
    _0x75130b.push(await _0x4876b2.config_get("获取配置"));
    await _0x16893f(0.2 + Math.random() * 1);
    !_0x4876b2.sessionId ? (_0x4876b2.loadCache(), !_0x4876b2.valid ? _0x75130b.push(await _0x4876b2.login()) : await _0x11c641.wait(200)) : (_0x75130b.push(await _0x4876b2.user_info()), await _0x11c641.wait(200));
  }
  await Promise.all(_0x75130b);
  _0xae4d35 = _0xae4d35?.["filter"](_0x4291c3 => _0x4291c3?.["valid"]);
  if (!_0xae4d35?.["length"]) {
    {
      console.log("\n无可用账号，停止运行\n");
      return;
    }
  }
  console.log("\n================== 用户信息 帐号数：[" + _0xae4d35?.["length"] + "]==================\n");
  _0x75130b = [];
  for (let _0x16d110 of _0xae4d35) {
    _0x75130b.push(await _0x16d110.task_tasklist("用户信息"));
    await _0x16893f(0.2 + Math.random() * 1);
    _0x75130b.push(await _0x16d110.get_unread_msg());
  }
  await Promise.all(_0x75130b);
  const _0x44a777 = _0xae4d35?.["filter"](_0x738d4c => _0x738d4c?.["jobList"]?.["find"](_0x7d7d0f => _0x7d7d0f?.["name"]?.["includes"]("签到") && _0x7d7d0f?.["frequency"] && _0x7d7d0f?.["frequency"] > _0x7d7d0f?.["finish_times"]));
  if (_0x44a777?.["length"]) {
    {
      console.log("\n================== 每日签到任务开始执行 待执行帐号数：[" + _0x44a777?.["length"] + "]==================\n");
      _0x75130b = [];
      for (let _0x2a656a of _0x44a777) {
        _0x75130b.push(await _0x2a656a.task_sign("每日签到"));
        await _0x16893f(0.2 + Math.random() * 1);
      }
      await Promise.all(_0x75130b);
    }
  } else console.log("\n无签到任务 或 当前帐号都已签到过了，无需执行签到任务\n");
  const _0x5420ff = _0xae4d35?.["filter"](_0x4e2166 => _0x4e2166?.["jobList"]?.["find"](_0x4abae3 => {
    return _0x4abae3?.["name"]?.["includes"]("帖子发布") && _0x4abae3?.["frequency"] && _0x4abae3?.["frequency"] > _0x4abae3?.["finish_times"] && _0x52a1c || _0x4abae3?.["name"]?.["includes"]("帖子点赞") && _0x4abae3?.["frequency"] && _0x4abae3?.["frequency"] > _0x4abae3?.["finish_times"] || _0x4abae3?.["name"]?.["includes"]("帖子评论") && _0x4abae3?.["frequency"] && _0x4abae3?.["frequency"] > _0x4abae3?.["finish_times"] && _0x26c073;
  }));
  if (_0x5420ff?.["length"]) {
    console.log("\n================== 社区帖子相关任务开始执行 待执行帐号数：[" + _0x5420ff?.["length"] + "]==================\n");
    _0x75130b = [];
    for (let _0x40133a of _0x5420ff) {
      _0x75130b.push(await _0x40133a.task_forum_info("社区帖子列表"));
      await _0x16893f(0.2 + Math.random() * 1);
    }
    await Promise.all(_0x75130b);
  } else console.log("\n无社区帖子相关任务 或 当前帐号都已做完了社区帖子任务，无需执行\n");
  await _0x16893f(0.2 + Math.random() * 1);
  const _0x40c08e = _0xae4d35?.["filter"](_0x4c9e16 => _0x4c9e16?.["jobList"]?.["find"](_0x3bca19 => {
    return _0x3bca19?.["name"]?.["includes"]("资讯评论") && _0x3bca19?.["frequency"] > _0x3bca19?.["finish_times"] && _0x2cc526 || _0x3bca19?.["name"]?.["includes"]("分享资讯") && _0x3bca19?.["frequency"] && _0x3bca19?.["frequency"] > _0x3bca19?.["finish_times"] || _0x3bca19?.["name"]?.["includes"]("资讯点赞") && _0x3bca19?.["frequency"] && _0x3bca19?.["frequency"] > _0x3bca19?.["finish_times"] || _0x3bca19?.["name"]?.["includes"]("资讯阅读") && _0x3bca19?.["frequency"] && _0x3bca19?.["frequency"] > _0x3bca19?.["finish_times"];
  }));
  if (_0x40c08e?.["length"]) {
    {
      console.log("\n================== 文章列表相关任务开始执行 待执行帐号数：[" + _0x40c08e?.["length"] + "]==================\n");
      _0x75130b = [];
      for (let _0x2ad628 of _0x40c08e) {
        console.log("\n开始执行帐号[" + _0x2ad628.index + "] 文章任务😄\n");
        _0x75130b.push(await _0x2ad628.task_articlelist("文章列表"));
        await _0x16893f(0.2 + Math.random() * 1);
      }
      await Promise.all(_0x75130b);
    }
  } else console.log("\n无文章资讯任务 或 当前帐号都已做完了资讯任务，无需执行相关任务\n");
  await _0x16893f(0.2 + Math.random() * 1);
  const _0x5f993f = _0xae4d35?.["filter"](_0x1939b9 => _0x1939b9?.["jobList"]?.["find"](_0x4e6079 => {
    return _0x4e6079?.["name"]?.["includes"]("本地服务") && _0x4e6079?.["frequency"] && _0x4e6079?.["frequency"] > _0x4e6079?.["finish_times"];
  }));
  if (_0x5f993f?.["length"]) {
    console.log("\n================== 本地服务任务开始执行 待执行帐号数：[" + _0x5f993f?.["length"] + "]==================\n");
    _0x75130b = [];
    for (let _0x595cb8 of _0x5f993f) {
      const _0x5bc8fd = _0x595cb8?.["jobList"]?.["find"](_0x2e9b31 => {
        return _0x2e9b31?.["name"]?.["includes"]("本地服务") && _0x2e9b31?.["frequency"] && _0x2e9b31?.["frequency"] > _0x2e9b31?.["finish_times"];
      });
      for (let _0x13dcfd = 0; _0x13dcfd < _0x5bc8fd?.["frequency"] - _0x5bc8fd?.["finish_times"]; _0x13dcfd++) {
        _0x75130b.push(await _0x595cb8.task_share("6", undefined, "本地服务"));
        await _0x16893f(1 + Math.random() * 1);
      }
    }
    await Promise.all(_0x75130b);
  } else console.log("\n无本地服务任务 或 当前帐号都已做完了本地服务任务，无需执行相关任务\n");
  console.log("\n================== 删除历史评论任务开始执行 待执行帐号数：[" + _0xae4d35?.["length"] + "]==================\n");
  for (let _0x1bbc52 of _0xae4d35) {
    await _0x1bbc52.get_comment_history();
    await _0x16893f(1 + Math.random() * 1);
  }
}
class _0x34f5f0 {
  ["valid"] = false;
  constructor(_0x37f507) {
    this.index = ++_0xb46962;
    this.accountId = "";
    this.host = _0x4845df;
    this.hostname = "https://" + this.host;
    this.key = "FR*r!isE5W";
    const _0x1b19c0 = _0x2d4e05,
      _0x12ee82 = Math.floor(Math.random() * _0x1b19c0.length);
    this.artlistdata = _0x1b19c0[_0x12ee82];
    if (_0x37f507?.["length"] === 1) {
      if (_0x37f507[0]?.["includes"]("#")) _0x37f507 = _0x37f507[0]?.["split"]("#");else _0x37f507[0]?.["includes"]("&") && (_0x37f507 = _0x37f507[0]?.["split"]("&"));
    }
    this.requestUA = _0x35be5a;
    _0x37f507?.["length"] === 3 && (this.requestUA = _0x37f507[2]);
    if (_0x37f507[0]?.["length"] === 11) this.account = _0x37f507[0], this.password = _0x37f507[1];else {
      if (_0x2f0495) {
        this.sessionId = _0x37f507[1];
        this.accountId = _0x37f507[0];
      } else this.sessionId = _0x37f507[0], this.accountId = _0x37f507[1];
    }
  }
  ["loadCache"]() {
    let _0xb01918 = _0x2f2cbe(_0xcc36bd + "_config", this.account);
    if (_0xb01918) {
      _0xb01918 = JSON.parse(_0xb01918);
      console.log("账号[" + this.index + "]从缓存读取成功 😄 ，其ID为： " + _0xb01918?.["id"] + "，手机号为：" + this.account);
      this.accountId = _0xb01918?.["id"];
      this.sessionId = _0xb01918?.["sessionId"];
      this.valid = true;
      return;
    }
  }
  async ["txt_api"]() {
    try {
      {
        let _0x377e4e = {
            "method": "GET",
            "url": "https://v1.hitokoto.cn/",
            "qs": {
              "c": "d"
            },
            "headers": {
              "content-type": "multipart/form-data; boundary=---011000010111000001101001"
            },
            "formData": {}
          },
          _0x2865d6 = await _0x410d63(_0x377e4e, "");
        if (_0x2865d6.id) {
          return _0x2865d6.hitokoto;
        } else {}
      }
    } catch (_0x3cd5b9) {
      console.log(_0x3cd5b9);
    }
  }
  async ["task_tasklist"](_0x3fccb3) {
    let _0x38a9cb = "/api/user_mumber/numberCenter",
      _0x13baaf = _0x2b8669.guid(),
      _0x1c96a1 = _0x2b8669.ts13(),
      _0xca3ce1 = _0x38a9cb + "&&" + this.sessionId + "&&" + _0x13baaf + "&&" + _0x1c96a1 + "&&" + this.key + "&&" + _0x298a48,
      _0x198a31 = _0x2b8669.SHA256_Encrypt(_0xca3ce1);
    try {
      let _0xaa05b7 = {
          "method": "GET",
          "url": "" + this.hostname + _0x38a9cb + "?is_new=1",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x13baaf,
            "X-TIMESTAMP": _0x1c96a1,
            "X-SIGNATURE": _0x198a31,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x3154a5 = await _0x410d63(_0xaa05b7, _0x3fccb3);
      if (_0x3154a5.code == 0) {
        !this.requestedUserInfo && (await this.user_info(), await _0x16893f(0.3));
        _0x3edd55("账号[" + this.index + "],欢迎用户:[" + _0x3154a5.data.rst.nick_name + "],当前积分为[" + _0x3154a5.data.rst.total_integral + "]，当前账号使用的UA是：" + this.requestUA);
        _0x1bec66 += "账号[" + this.index + "],欢迎用户:[" + _0x3154a5.data.rst.nick_name + "],当前积分为[" + _0x3154a5.data.rst.total_integral + "]\n";
        await _0x16893f(0.3);
        this.jobList = _0x3154a5.data.rst.user_task_list?.["map"](_0x554310 => {
          return {
            "name": _0x554310?.["name"],
            "finish_times": Number(_0x554310?.["finish_times"]),
            "frequency": Number(_0x554310?.["frequency"]),
            "integral": _0x554310?.["integral"],
            "member_task_type": _0x554310?.["member_task_type"]
          };
        });
        if (_0x3154a5?.["data"]?.["daily_sign_info"]?.["name"]?.["includes"]("签到")) {
          {
            let _0x163622 = _0x3154a5?.["data"]?.["daily_sign_info"]?.["daily_sign_list"]?.["find"](_0x5874a4 => _0x5874a4?.["current"])?.["signed"];
            this.jobList.push({
              "name": "每日签到",
              "finish_times": _0x163622 ? 1 : 0,
              "frequency": 1
            });
          }
        }
        _0x3edd55("账号[" + this.index + "],获取任务列表成功 😄 :");
        await _0x16893f(0.3);
        let _0x2c9a84 = "";
        await _0x16893f(0.2 + Math.random() * 1);
        for (let _0x15253e = 0; _0x15253e < this.jobList.length; _0x15253e++) {
          _0x2c9a84 += this.jobList[_0x15253e].name + "[" + this.jobList[_0x15253e].finish_times + "/" + this.jobList[_0x15253e].frequency + "]\n";
        }
        await _0x16893f(0.3);
        _0x3edd55(_0x2c9a84);
      } else _0x3edd55("账号[" + this.index + "],获取任务列表:失败 🙁 了呢,原因：" + _0x3154a5?.["message"]), console.log(_0x3154a5);
    } catch (_0x36723b) {
      console.log(_0x36723b);
    }
  }
  async ["activity_login"](_0x5db110) {
    try {
      {
        let _0x424505 = {
            "method": "POST",
            "url": "http://api.576tv.com/AppActive/Public/setAppLogin",
            "headers": {
              "Accept": " */*",
              "Origin": " http://api.576tv.com",
              "X-Requested-With": " XMLHttpRequest",
              "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
              "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8"
            },
            "body": "uuid=tzmxc&cookie=0&accountId=" + this.accountId + "&sessionId=" + this.sessionId
          },
          _0x54f2ac = await _0x410d63(_0x424505, _0x5db110, true),
          _0x47cfbc = _0x54f2ac?.["body"];
        _0x47cfbc.status == 1 ? (this.authCookie = _0x54f2ac?.["rawHeaders"]?.["filter"](_0x46047f => _0x46047f?.["includes"]("path=/"))?.["join"](";"), _0x3edd55("账号[" + this.index + "],授权活动成功 😄"), await this.activity_vote("投票")) : _0x3edd55("账号[" + this.index + "],授权活动:失败 🙁 了呢,原因：" + JSON.stringify(_0x47cfbc));
      }
    } catch (_0x2b63b1) {
      console.log(_0x2b63b1);
    }
  }
  async ["activity_vote"](_0x48b759) {
    try {
      {
        let _0x76b3af = {
            "method": "POST",
            "url": "http://api.576tv.com/AppActive/Vote/postVote",
            "headers": {
              "Accept": " */*",
              "Origin": " http://api.576tv.com",
              "X-Requested-With": " XMLHttpRequest",
              "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
              "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
              "Cookie": this.authCookie
            },
            "body": "uuid=tzmxc&voteids=10461%2C10455%2C10476%2C10448%2C10456"
          },
          _0x1d04da = await _0x410d63(_0x76b3af, _0x48b759);
        _0x1d04da.status == 1 ? (_0x3edd55("账号[" + this.index + "],投票成功 😄"), await this.activity_draw("抽奖")) : (_0x3edd55("账号[" + this.index + "],投票:失败 🙁 了呢,原因：" + _0x1d04da?.["info"]), await this.activity_get_prize("读取奖品"));
      }
    } catch (_0x270f79) {
      console.log(_0x270f79);
    }
  }
  async ["activity_draw"](_0xb26c07) {
    try {
      let _0x33c50f = {
          "method": "POST",
          "url": "http://api.576tv.com/AppActive/Prize/start",
          "headers": {
            "Accept": " */*",
            "Origin": " http://api.576tv.com",
            "X-Requested-With": " XMLHttpRequest",
            "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
            "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": this.authCookie
          },
          "body": "uuid=tzmxc"
        },
        _0x20d14a = await _0x410d63(_0x33c50f, _0xb26c07);
      if (_0x20d14a.status == 1) _0x3edd55("账号[" + this.index + "],抽奖成功 😄：" + JSON.stringify(_0x20d14a));else {
        _0x3edd55("账号[" + this.index + "],抽奖失败 🙁 了呢,原因：" + _0x20d14a?.["info"]);
      }
      await this.activity_get_prize("读取奖品");
    } catch (_0x3e0112) {
      console.log(_0x3e0112);
    }
  }
  async ["activity_get_prize"](_0x446301) {
    try {
      {
        let _0xe8c4dd = {
            "method": "POST",
            "url": "http://api.576tv.com/AppActive/Prize/getPrize",
            "headers": {
              "Accept": " */*",
              "Origin": " http://api.576tv.com",
              "X-Requested-With": " XMLHttpRequest",
              "User-Agent": " Mozilla/5.0 (Linux; Android 9; PBBM00 Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;5.3.1;native_app",
              "Content-Type": " application/x-www-form-urlencoded; charset=UTF-8",
              "Cookie": this.authCookie
            },
            "body": "uuid=tzmxc"
          },
          _0x1e29ad = await _0x410d63(_0xe8c4dd, _0x446301);
        if (_0x1e29ad.status == 1) {
          let _0x26f830 = "";
          for (let _0x5a6afc = 0; _0x5a6afc < _0x1e29ad?.["data"]?.["length"]; _0x5a6afc++) {
            const _0x5bba07 = _0x1e29ad?.["data"][_0x5a6afc];
            _0x26f830 += "\n奖品名称：" + _0x5bba07?.["title"] + "----" + (_0x5bba07?.["url"] || _0x5bba07?.["time"]) + "----" + (_0x5bba07?.["valid"] === "1" ? "未领取" : "已领取") + "----全部信息：" + JSON.stringify(_0x5bba07);
          }
          _0x3edd55("账号[" + this.index + "],读取奖品成功 😄：" + (_0x26f830 || JSON.stringify(_0x1e29ad?.["data"])));
        } else _0x3edd55("账号[" + this.index + "],读取中奖记录失败 🙁 了呢,原因：" + _0x1e29ad?.["info"]);
      }
    } catch (_0x374a57) {
      console.log(_0x374a57);
    }
  }
  async ["task_sign"](_0x22a4ec) {
    let _0x43927a = "/api/user_mumber/sign",
      _0x2f6c9f = _0x2b8669.guid(),
      _0x210973 = _0x2b8669.ts13(),
      _0x4732b3 = _0x43927a + "&&" + this.sessionId + "&&" + _0x2f6c9f + "&&" + _0x210973 + "&&" + this.key + "&&" + _0x298a48,
      _0x195f6e = _0x2b8669.SHA256_Encrypt(_0x4732b3);
    try {
      let _0x3b132c = {
          "method": "GET",
          "url": "" + this.hostname + _0x43927a,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x2f6c9f,
            "X-TIMESTAMP": _0x210973,
            "X-SIGNATURE": _0x195f6e,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x2b9eb5 = await _0x410d63(_0x3b132c, _0x22a4ec);
      _0x2b9eb5.code == 0 ? _0x3edd55("账号[" + this.index + "],签到成功 😄 [" + _0x2b9eb5.data.signCommonInfo.date + "],获得积分:[" + _0x2b9eb5.data.signExperience + "]") : (_0x3edd55("账号[" + this.index + "],签到:失败 🙁 了呢,原因：" + _0x2b9eb5?.["message"]), console.log(_0x2b9eb5));
    } catch (_0x501539) {
      console.log(_0x501539);
    }
  }
  async ["task_forum_info"](_0x34b173) {
    let _0x4b78ad = "/api/forum/forum_list",
      _0x318695 = _0x2b8669.guid(),
      _0x41b131 = _0x2b8669.ts13(),
      _0x314d02 = _0x4b78ad + "&&" + this.sessionId + "&&" + _0x318695 + "&&" + _0x41b131 + "&&" + this.key + "&&" + _0x298a48,
      _0x2d79f0 = _0x2b8669.SHA256_Encrypt(_0x314d02);
    try {
      {
        let _0x203939 = {
            "method": "GET",
            "url": "" + this.hostname + _0x4b78ad + ("?tenantId=" + _0x298a48),
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x318695,
              "X-TIMESTAMP": _0x41b131,
              "X-SIGNATURE": _0x2d79f0,
              "X-TENANT-ID": _0x298a48,
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x2266dc = await _0x410d63(_0x203939, _0x34b173);
        if (_0x2266dc.code == 0) {
          {
            const _0x14d8e8 = _0x2266dc?.["data"]?.["forum_list"]?.["length"] ? _0x2266dc?.["data"]?.["forum_list"][0]?.["id"] : undefined;
            _0x14d8e8 ? (_0x3edd55("账号[" + this.index + "],获取社区信息成功 😄 ，准备开始获取相关列表"), await this.task_forum_list(_0x14d8e8)) : _0x3edd55("账号[" + this.index + "],获取社区为空 🙁 ，跳过社区任务");
          }
        } else {
          _0x3edd55("账号[" + this.index + "],获取社区信息:失败 🙁 了呢,原因：" + _0x2266dc?.["message"]);
          console.log(_0x2266dc);
        }
      }
    } catch (_0x27f550) {
      console.log(_0x27f550);
    }
  }
  async ["task_forum_list"](_0x2accfe) {
    let _0x14b171 = "/api/forum/thread_list",
      _0x581b2c = _0x2b8669.guid(),
      _0x344956 = _0x2b8669.ts13(),
      _0xa17a9e = _0x14b171 + "&&" + this.sessionId + "&&" + _0x581b2c + "&&" + _0x344956 + "&&" + this.key + "&&" + _0x298a48,
      _0x22802f = _0x2b8669.SHA256_Encrypt(_0xa17a9e);
    try {
      let _0x38be76 = {
          "method": "GET",
          "url": "" + this.hostname + _0x14b171 + ("?forum_id=" + _0x2accfe),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x581b2c,
            "X-TIMESTAMP": _0x344956,
            "X-SIGNATURE": _0x22802f,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x1db7d9 = await _0x410d63(_0x38be76, "获取帖子");
      if (_0x1db7d9.code == 0) {
        for (let _0x32cbdc = 0; _0x32cbdc < _0x1db7d9.data.thread_list?.["length"]; _0x32cbdc++) {
          {
            if (!this?.["jobList"]?.["find"](_0x1a1cd9 => {
              return _0x1a1cd9?.["name"]?.["includes"]("帖子发布") && _0x1a1cd9?.["frequency"] > _0x1a1cd9?.["finish_times"] && _0x52a1c || _0x1a1cd9?.["name"]?.["includes"]("帖子点赞") && _0x1a1cd9?.["frequency"] > _0x1a1cd9?.["finish_times"] || _0x1a1cd9?.["name"]?.["includes"]("帖子评论") && _0x1a1cd9?.["frequency"] > _0x1a1cd9?.["finish_times"] && _0x26c073;
            })) {
              _0x3edd55("账号[" + this.index + "],社区任务已完成，跳过-----");
              break;
            }
            _0x3edd55("账号[" + this.index + "],对帖子[" + _0x1db7d9.data.thread_list[_0x32cbdc].id + "]操作-----");
            await _0x16893f(0.3 + Math.random() * 1);
            if (this?.["jobList"]?.["find"](_0x6e5f61 => {
              return _0x6e5f61?.["name"]?.["includes"]("帖子点赞") && _0x6e5f61?.["frequency"] > _0x6e5f61?.["finish_times"];
            })) {
              if (_0x1db7d9.data.thread_list[_0x32cbdc].already_liked) _0x3edd55("账号[" + this.index + "],之前已经对帖子[" + _0x1db7d9.data.thread_list[_0x32cbdc].id + "]点赞过，不能再次点赞");else {
                await this.task_forum_like(_0x1db7d9.data.thread_list[_0x32cbdc].id);
              }
              await _0x16893f(1 + Math.random() * 1);
            } else _0x3edd55("账号[" + this.index + "],无需对帖子点赞");
            if (this?.["jobList"]?.["find"](_0xf4502e => {
              return _0xf4502e?.["name"]?.["includes"]("帖子发布") && _0xf4502e?.["frequency"] > _0xf4502e?.["finish_times"] && _0x52a1c;
            })) {
              await this.task_forum_post(_0x2accfe);
              await _0x16893f(1 + Math.random() * 1);
            } else _0x3edd55("账号[" + this.index + "],无需发布帖子，可能是 已执行完毕该任务，或者 未开启该任务");
            this?.["jobList"]?.["find"](_0xbaf9d4 => {
              return _0xbaf9d4?.["name"]?.["includes"]("帖子评论") && _0xbaf9d4?.["frequency"] > _0xbaf9d4?.["finish_times"] && _0x26c073;
            }) ? (await this.task_forum_comment(_0x2accfe), await _0x16893f(1 + Math.random() * 1)) : _0x3edd55("账号[" + this.index + "],无需对帖子进行评论，可能是 已执行完毕该任务，或者 未开启该任务");
          }
        }
      } else _0x3edd55("账号[" + this.index + "],获取社区帖子:失败 🙁 了呢,原因：" + _0x1db7d9?.["message"]), console.log(_0x1db7d9);
    } catch (_0x52eeb0) {
      console.log(_0x52eeb0);
    }
  }
  async ["task_forum_like"](_0x15aee1) {
    let _0x3a79e0 = "/api/forum/like",
      _0x2a25d6 = _0x2b8669.guid(),
      _0x182273 = _0x2b8669.ts13(),
      _0x4efd93 = _0x3a79e0 + "&&" + this.sessionId + "&&" + _0x2a25d6 + "&&" + _0x182273 + "&&" + this.key + "&&" + _0x298a48,
      _0x16e1a6 = _0x2b8669.SHA256_Encrypt(_0x4efd93);
    try {
      {
        let _0x22d991 = _0x5c3e36();
        _0x22d991.append("target_type", "1");
        _0x22d991.append("target_id", _0x15aee1);
        let _0x43c30b = {
          "method": "POST",
          "url": "" + this.hostname + _0x3a79e0,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x2a25d6,
            "X-TIMESTAMP": _0x182273,
            "X-SIGNATURE": _0x16e1a6,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryTDSOjpwy3A5ypRAo",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "Accept": "*/*",
            "X-ACCOUNT-ID": this.accountId
          },
          "body": _0x22d991
        };
        _0x43c30b.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x22d991.getBoundary();
        let _0x299500 = await _0x410d63(_0x43c30b, "点赞帖子");
        if (_0x299500.code == 0) {
          {
            const _0x36ceac = this?.["jobList"]?.["find"](_0x307009 => {
              return _0x307009?.["name"]?.["includes"]("帖子点赞") && _0x307009?.["frequency"] > _0x307009?.["finish_times"];
            });
            _0x36ceac.finish_times++;
            _0x3edd55("账号[" + this.index + "],点赞帖子成功 😄 :[" + _0x15aee1 + "]");
          }
        } else _0x3edd55("账号[" + this.index + "],点赞帖子:失败 🙁 了呢,原因：" + _0x299500?.["message"]), console.log(_0x299500);
      }
    } catch (_0x1bfac2) {
      console.log(_0x1bfac2);
    }
  }
  async ["task_forum_comment"](_0x417e18) {
    let _0x23ea58 = "/api/forum/post_comment",
      _0x73da69 = _0x2b8669.guid(),
      _0x2683f8 = _0x2b8669.ts13(),
      _0x3e2bad = _0x23ea58 + "&&" + this.sessionId + "&&" + _0x73da69 + "&&" + _0x2683f8 + "&&" + this.key + "&&" + _0x298a48,
      _0x8d39c7 = _0x2b8669.SHA256_Encrypt(_0x3e2bad);
    try {
      {
        let _0x2e9972 = _0x5c3e36(),
          _0x3d5598 = _0xa7fc3b ? await this.txt_api() : _0x420f6e[Math.floor(Math.random() * _0x420f6e?.["length"])];
        _0x2e9972.append("thread_id", _0x417e18);
        _0x2e9972.append("content", _0x3d5598);
        let _0x25f62f = {
          "method": "POST",
          "url": "" + this.hostname + _0x23ea58,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x73da69,
            "X-TIMESTAMP": _0x2683f8,
            "X-SIGNATURE": _0x8d39c7,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryTDSOjpwy3A5ypRAo",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "Accept": "*/*",
            "X-ACCOUNT-ID": this.accountId
          },
          "body": _0x2e9972
        };
        _0x25f62f.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x2e9972.getBoundary();
        let _0x37f36d = await _0x410d63(_0x25f62f, "评论帖子");
        if (_0x37f36d.code == 0) {
          const _0x2432e0 = this?.["jobList"]?.["find"](_0x4655cc => {
            return _0x4655cc?.["name"]?.["includes"]("帖子评论") && _0x4655cc?.["frequency"] > _0x4655cc?.["finish_times"];
          });
          _0x2432e0.finish_times++;
          _0x3edd55("账号[" + this.index + "],评论帖子成功 😄 :[" + _0x417e18 + "]");
          await this.get_form_comments(_0x417e18);
        } else _0x3edd55("账号[" + this.index + "],评论帖子:失败 🙁 了呢,原因：" + _0x37f36d?.["message"]);
      }
    } catch (_0x1c2971) {
      console.log(_0x1c2971);
    }
  }
  async ["get_form_comments"](_0xac33ee) {
    let _0x1640fd = "/api/forum/comment_list",
      _0x3b361b = _0x2b8669.guid(),
      _0x5cc170 = _0x2b8669.ts13(),
      _0x178d96 = _0x1640fd + "&&" + this.sessionId + "&&" + _0x3b361b + "&&" + _0x5cc170 + "&&" + this.key + "&&" + _0x298a48,
      _0x273431 = _0x2b8669.SHA256_Encrypt(_0x178d96);
    try {
      let _0x178654 = {
          "method": "GET",
          "url": "" + this.hostname + _0x1640fd + ("?thread_id=" + _0xac33ee + "&type=1"),
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x3b361b,
            "X-TIMESTAMP": _0x5cc170,
            "X-SIGNATURE": _0x273431,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0xfd5419 = await _0x410d63(_0x178654, name);
      if (_0xfd5419.code == 0) {
        const _0x97f50 = _0xfd5419?.["data"]?.["comment_list"]?.["find"](_0x2bef06 => _0x2bef06?.["account_id"] === this.accountId)?.["id"];
        _0x97f50 ? (_0x3edd55("账号[" + this.index + "],获取到帖子评论数据成功 😄 ，准备开始删除评论"), await this.delete_forum_comment(_0x97f50)) : _0x3edd55("账号[" + this.index + "],获取到帖子评论数据为空 🙁 ，跳过删除");
      } else _0x3edd55("账号[" + this.index + "],获取到帖子评论数据失败 🙁 了呢,原因：" + _0xfd5419?.["message"]);
    } catch (_0x5a2512) {
      console.log(_0x5a2512);
    }
  }
  async ["delete_forum_comment"](_0x296c0e) {
    let _0xb279bb = "/api/forum/delete_comment",
      _0x4ec0b0 = _0x2b8669.guid(),
      _0x56ca5f = _0x2b8669.ts13(),
      _0xd17400 = _0xb279bb + "&&" + this.sessionId + "&&" + _0x4ec0b0 + "&&" + _0x56ca5f + "&&" + this.key + "&&" + _0x298a48,
      _0x6182dd = _0x2b8669.SHA256_Encrypt(_0xd17400);
    try {
      {
        let _0x2e3d8a = _0x5c3e36(),
          _0x823ec9 = _0xa7fc3b ? await this.txt_api() : _0x420f6e[Math.floor(Math.random() * _0x420f6e?.["length"])];
        _0x2e3d8a.append("comment_id", _0x296c0e);
        let _0x14e7db = {
          "method": "POST",
          "url": "" + this.hostname + _0xb279bb,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4ec0b0,
            "X-TIMESTAMP": _0x56ca5f,
            "X-SIGNATURE": _0x6182dd,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryTDSOjpwy3A5ypRAo",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "Accept": "*/*",
            "X-ACCOUNT-ID": this.accountId
          },
          "body": _0x2e3d8a
        };
        _0x14e7db.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x2e3d8a.getBoundary();
        let _0x388630 = await _0x410d63(_0x14e7db, "删除帖子评论");
        _0x388630.code == 0 ? _0x3edd55("账号[" + this.index + "],删除帖子评论成功 😄 :[" + _0x296c0e + "]") : _0x3edd55("账号[" + this.index + "],删除帖子评论:失败 🙁 了呢,原因：" + _0x388630?.["message"]);
      }
    } catch (_0x585e48) {
      console.log(_0x585e48);
    }
  }
  async ["task_forum_post"](_0x8a3215) {
    let _0x5ec435 = "/api/forum/post_thread",
      _0xa1488c = _0x2b8669.guid(),
      _0x3b5832 = _0x2b8669.ts13(),
      _0x48b57b = _0x5ec435 + "&&" + this.sessionId + "&&" + _0xa1488c + "&&" + _0x3b5832 + "&&" + this.key + "&&" + _0x298a48,
      _0x2a5674 = _0x2b8669.SHA256_Encrypt(_0x48b57b);
    try {
      let _0x3ac95e = _0x5c3e36();
      _0x3ac95e.append("forum_id", _0x8a3215);
      _0x3ac95e.append("title", "签到");
      _0x3ac95e.append("content", "今日打卡");
      _0x3ac95e.append("attachments", "");
      _0x3ac95e.append("location_name", "{}");
      let _0x5169e0 = {
        "method": "POST",
        "url": "" + this.hostname + _0x5ec435,
        "headers": {
          "X-SESSION-ID": "" + this.sessionId,
          "X-REQUEST-ID": _0xa1488c,
          "X-TIMESTAMP": _0x3b5832,
          "X-SIGNATURE": _0x2a5674,
          "X-TENANT-ID": _0x298a48,
          "User-Agent": _0x35be5a,
          "Cache-Control": "no-cache",
          "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryMdIuuLGEa01BfEzM",
          "Host": this.host,
          "Connection": "Keep-Alive",
          "Accept": "*/*",
          "X-ACCOUNT-ID": this.accountId
        },
        "body": _0x3ac95e
      };
      _0x5169e0.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x3ac95e.getBoundary();
      let _0x2752ea = await _0x410d63(_0x5169e0, "发布帖子");
      if (_0x2752ea.code == 0) {
        {
          const _0x562d2f = this?.["jobList"]?.["find"](_0x38ce9a => {
            return _0x38ce9a?.["name"]?.["includes"]("帖子发布") && _0x38ce9a?.["frequency"] > _0x38ce9a?.["finish_times"];
          });
          _0x562d2f.finish_times++;
          _0x3edd55("账号[" + this.index + "],发布帖子成功 😄 :[" + _0x8a3215 + "]");
          await this.deleteForumPost(_0x2752ea?.["data"]?.["thread_id"]);
        }
      } else _0x3edd55("账号[" + this.index + "],发布帖子:失败 🙁 了呢,原因：" + _0x2752ea?.["message"]), console.log(_0x2752ea);
    } catch (_0x2b3ffb) {
      console.log(_0x2b3ffb);
    }
  }
  async ["deleteForumPost"](_0x134486) {
    let _0x4f68d4 = "/api/forum/delete_thread",
      _0xd89a4c = _0x2b8669.guid(),
      _0x1663c7 = _0x2b8669.ts13(),
      _0x46c47b = _0x4f68d4 + "&&" + this.sessionId + "&&" + _0xd89a4c + "&&" + _0x1663c7 + "&&" + this.key + "&&" + _0x298a48,
      _0x596526 = _0x2b8669.SHA256_Encrypt(_0x46c47b);
    try {
      {
        let _0x6e2873 = _0x5c3e36();
        _0x6e2873.append("thread_id", _0x134486);
        let _0x89b69e = {
          "method": "POST",
          "url": "" + this.hostname + _0x4f68d4,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0xd89a4c,
            "X-TIMESTAMP": _0x1663c7,
            "X-SIGNATURE": _0x596526,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryi1cQvxsAzoTagcpx",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "Accept": "*/*",
            "X-ACCOUNT-ID": this.accountId
          },
          "body": _0x6e2873
        };
        _0x89b69e.headers["Content-Type"] = "multipart/form-data; boundary=" + _0x6e2873.getBoundary();
        let _0x3ab86a = await _0x410d63(_0x89b69e, "删除帖子");
        _0x3ab86a.code == 0 ? _0x3edd55("账号[" + this.index + "],删除帖子成功 😄 :[" + _0x134486 + "]") : (_0x3edd55("账号[" + this.index + "],删除帖子:失败 🙁 了呢,原因：" + _0x3ab86a?.["message"]), console.log(_0x3ab86a));
      }
    } catch (_0x3dc917) {
      console.log(_0x3dc917);
    }
  }
  async ["task_articlelist"](_0x34c6e4) {
    let _0x5865ec = "/api/article/channel_list",
      _0x29e494 = _0x2b8669.guid(),
      _0x1b7c00 = _0x2b8669.ts13(),
      _0x52f0fe = _0x5865ec + "&&" + this.sessionId + "&&" + _0x29e494 + "&&" + _0x1b7c00 + "&&" + this.key + "&&" + _0x298a48,
      _0x9df109 = _0x2b8669.SHA256_Encrypt(_0x52f0fe);
    try {
      {
        let _0x3ea8d5 = {
            "method": "GET",
            "url": "" + this.hostname + _0x5865ec + ("?channel_id=" + this.artlistdata + "&isDiangHao=false&is_new=" + (Math.random() >= 0.5) + "&list_count=" + Math.floor(Math.random() * 10) + "&size=10"),
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x29e494,
              "X-TIMESTAMP": _0x1b7c00,
              "X-SIGNATURE": _0x9df109,
              "X-TENANT-ID": _0x298a48,
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0xe3b0fa = await _0x410d63(_0x3ea8d5, _0x34c6e4);
        if (_0xe3b0fa.code == 0) {
          let _0x4a725b = false;
          for (let _0x1ba079 = 0; _0x1ba079 < _0xe3b0fa.data.article_list?.["length"]; _0x1ba079++) {
            {
              if (!this?.["jobList"]?.["find"](_0x2ba1a5 => {
                return _0x2ba1a5?.["name"]?.["includes"]("资讯评论") && _0x2ba1a5?.["frequency"] > _0x2ba1a5?.["finish_times"] && _0x2cc526 || _0x2ba1a5?.["name"]?.["includes"]("分享资讯") && _0x2ba1a5?.["frequency"] > _0x2ba1a5?.["finish_times"] || _0x2ba1a5?.["name"]?.["includes"]("资讯点赞") && _0x2ba1a5?.["frequency"] > _0x2ba1a5?.["finish_times"] || _0x2ba1a5?.["name"]?.["includes"]("资讯阅读") && _0x2ba1a5?.["frequency"] > _0x2ba1a5?.["finish_times"];
              })) {
                {
                  _0x3edd55("账号[" + this.index + "],文章任务已完成，跳过后续文章-----");
                  break;
                }
              }
              await this.task_comment_pre();
              await _0x16893f(1 + Math.random() * 1);
              _0x3edd55("账号[" + this.index + "],对 第" + (_0x1ba079 + 1) + "篇 文章[" + _0xe3b0fa.data.article_list[_0x1ba079].id + "]操作-----");
              let _0x7627db = _0xe3b0fa.data.article_list[_0x1ba079].id;
              await this.task_read(_0x7627db);
              await _0x16893f(1 + Math.random() * 1);
              if (this?.["jobList"]?.["find"](_0x3a8a26 => {
                return _0x3a8a26?.["name"]?.["includes"]("资讯点赞") && _0x3a8a26?.["frequency"] > _0x3a8a26?.["finish_times"];
              })) {
                if (_0xe3b0fa.data.article_list[_0x1ba079].liked) _0x3edd55("账号[" + this.index + "],之前已经对资讯[" + _0x7627db + "]点赞过，不能再次点赞");else !_0xe3b0fa.data.article_list[_0x1ba079].like_enabled && !_0x35c7bb ? _0x3edd55("账号[" + this.index + "],资讯[" + _0x7627db + "]未开启点赞功能，无法进行点赞") : await this.task_like(_0x7627db);
                await _0x16893f(1 + Math.random() * 1);
              }
              if (!_0x4a725b) {
                {
                  if (_0x2cc526 && !this.commentError && this?.["jobList"]?.["find"](_0x4f694a => {
                    return _0x4f694a?.["name"]?.["includes"]("资讯评论") && _0x4f694a?.["frequency"] > _0x4f694a?.["finish_times"];
                  })) {
                    await this.task_comment(_0x7627db);
                    await _0x16893f(2 + Math.random() * 1);
                  } else this.commentError && (_0x3edd55("账号[" + this.index + "],评论文章遇见了一些问题 🙁 ，暂无解决方法，即将跳过后续评论，如果您有解决方法，欢迎提供，错误信息：该篇新闻不支持评论【评论失败，请重新进入当前页面！】"), _0x4a725b = true);
                }
              } else {
                if (!this?.["jobList"]?.["find"](_0x3a880f => {
                  return _0x3a880f?.["name"]?.["includes"]("分享资讯") && _0x3a880f?.["frequency"] > _0x3a880f?.["finish_times"] || _0x3a880f?.["name"]?.["includes"]("资讯点赞") && _0x3a880f?.["frequency"] > _0x3a880f?.["finish_times"] || _0x3a880f?.["name"]?.["includes"]("资讯阅读") && _0x3a880f?.["frequency"] > _0x3a880f?.["finish_times"];
                })) break;
              }
              this?.["jobList"]?.["find"](_0x3912ac => {
                return _0x3912ac?.["name"]?.["includes"]("分享资讯") && _0x3912ac?.["frequency"] > _0x3912ac?.["finish_times"];
              }) && (!_0xe3b0fa.data.article_list[_0x1ba079].share_enabled && !_0x35c7bb ? _0x3edd55("账号[" + this.index + "],文章[" + _0x7627db + "]未开启分享功能，无法进行分享") : await this.task_share("3", _0x7627db, "分享"));
            }
          }
        } else _0x3edd55("账号[" + this.index + "],获取文章:失败 🙁 了呢,原因：" + _0xe3b0fa?.["message"]), console.log(_0xe3b0fa);
      }
    } catch (_0x29ba9e) {
      console.log(_0x29ba9e);
    }
  }
  async ["get_comment_history"](_0x365241) {
    let _0x2d332f = "/api/account_comment/comment_list",
      _0x4f0f7f = _0x2b8669.guid(),
      _0x296c65 = _0x2b8669.ts13(),
      _0xe6f164 = _0x2d332f + "&&" + this.sessionId + "&&" + _0x4f0f7f + "&&" + _0x296c65 + "&&" + this.key + "&&" + _0x298a48,
      _0x22d188 = _0x2b8669.SHA256_Encrypt(_0xe6f164);
    try {
      let _0x8e3674 = {
          "method": "GET",
          "url": "" + this.hostname + _0x2d332f + "?size=999",
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4f0f7f,
            "X-TIMESTAMP": _0x296c65,
            "X-SIGNATURE": _0x22d188,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x2e6cdf = await _0x410d63(_0x8e3674, _0x365241);
      if (_0x2e6cdf.code == 0) {
        {
          let _0x2900da = _0x2e6cdf.data.comment_list?.["length"];
          for (let _0x55ca5a = 0; _0x55ca5a < _0x2e6cdf.data.comment_list?.["length"]; _0x55ca5a++) {
            _0x3edd55("账号[" + this.index + "],对 第" + (_0x55ca5a + 1) + "个 评论[" + _0x2e6cdf.data.comment_list[_0x55ca5a].id + "]删除，删除总数量：" + _0x2e6cdf.data.comment_list?.["length"] + "，待删除：" + _0x2900da + " 条-----");
            let _0x3a0e04 = _0x2e6cdf.data.comment_list[_0x55ca5a].id;
            await this.deleteComment(_0x3a0e04);
            _0x2900da--;
            await _0x16893f(1 + Math.random() * 1);
          }
        }
      } else _0x3edd55("账号[" + this.index + "],删除评论:失败 🙁 了呢,原因：" + _0x2e6cdf?.["message"]), console.log(_0x2e6cdf);
    } catch (_0x5cc84e) {
      console.log(_0x5cc84e);
    }
  }
  async ["task_read"](_0x1115e4) {
    let _0x42840c = "/api/article/detail",
      _0x3148c4 = _0x2b8669.guid(),
      _0x5e1e4f = _0x2b8669.ts13(),
      _0x3a4b10 = _0x42840c + "&&" + this.sessionId + "&&" + _0x3148c4 + "&&" + _0x5e1e4f + "&&" + this.key + "&&" + _0x298a48,
      _0x27ba48 = _0x2b8669.SHA256_Encrypt(_0x3a4b10);
    try {
      let _0x142595 = {
          "method": "GET",
          "url": "" + this.hostname + _0x42840c + "?id=" + _0x1115e4,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x3148c4,
            "X-TIMESTAMP": _0x5e1e4f,
            "X-SIGNATURE": _0x27ba48,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0xc3b69a = await _0x410d63(_0x142595, "阅读文章");
      if (_0xc3b69a.code == 0) {
        const _0x584078 = this?.["jobList"]?.["find"](_0x5da35a => {
          return _0x5da35a?.["name"]?.["includes"]("资讯阅读") && _0x5da35a?.["frequency"] > _0x5da35a?.["finish_times"];
        });
        _0x584078 && _0x584078.finish_times++;
        _0x3edd55("账号[" + this.index + "],阅读文章成功 😄 :[" + _0xc3b69a.data.article.id + "]");
      } else _0x3edd55("账号[" + this.index + "],阅读文章:失败 🙁 了呢,原因：" + _0xc3b69a?.["message"]);
    } catch (_0x3537b4) {
      console.log(_0x3537b4);
    }
  }
  async ["task_like"](_0x5c62a7) {
    let _0x2b6ed7 = "/api/favorite/like",
      _0x4d3ee4 = _0x2b8669.guid(),
      _0x3d26a4 = _0x2b8669.ts13(),
      _0x45c12b = _0x2b6ed7 + "&&" + this.sessionId + "&&" + _0x4d3ee4 + "&&" + _0x3d26a4 + "&&" + this.key + "&&" + _0x298a48,
      _0x2043ae = _0x2b8669.SHA256_Encrypt(_0x45c12b);
    try {
      let _0xc076dd = {
          "method": "POST",
          "url": "" + this.hostname + _0x2b6ed7,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4d3ee4,
            "X-TIMESTAMP": _0x3d26a4,
            "X-SIGNATURE": _0x2043ae,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "action": "true",
            "id": _0x5c62a7
          }
        },
        _0xb113e4 = await _0x410d63(_0xc076dd, "点赞文章");
      if (_0xb113e4.code == 0) {
        {
          const _0xc61b4e = this?.["jobList"]?.["find"](_0x230012 => {
            return _0x230012?.["name"]?.["includes"]("资讯点赞") && _0x230012?.["frequency"] > _0x230012?.["finish_times"];
          });
          _0xc61b4e.finish_times++;
          _0x3edd55("账号[" + this.index + "],点赞文章成功 😄 :[" + _0x5c62a7 + "]");
        }
      } else _0x3edd55("账号[" + this.index + "],用户查询:失败 🙁 了呢,原因：" + _0xb113e4?.["message"]), console.log(_0xb113e4);
    } catch (_0x4f9d71) {
      console.log(_0x4f9d71);
    }
  }
  async ["RSA_Encrypt"](_0xe578d) {
    const _0x1a380e = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB\n-----END PUBLIC KEY-----",
      _0x2c7cae = _0x2b8669.RSA_Encrypt(_0xe578d, _0x1a380e);
    return _0x2c7cae;
  }
  async ["loginByCode"](_0x4a6a76, _0x4539f7) {
    try {
      let _0x2d7940 = "/api/zbtxz/login",
        _0x4da10c = _0x2b8669.guid(),
        _0x205d8e = _0x2b8669.ts13(),
        _0x2a4e9a = _0x2d7940 + "&&" + (this.sessionId || _0x4a6a76) + "&&" + _0x4da10c + "&&" + _0x205d8e + "&&" + this.key + "&&" + _0x298a48,
        _0x3a9828 = _0x2b8669.SHA256_Encrypt(_0x2a4e9a),
        _0x29125f = {
          "method": "POST",
          "url": "" + this.hostname + _0x2d7940,
          "headers": {
            "X-SESSION-ID": "" + (this.sessionId || _0x4a6a76),
            "X-REQUEST-ID": _0x4da10c,
            "X-TIMESTAMP": _0x205d8e,
            "X-SIGNATURE": _0x3a9828,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive"
          },
          "form": "code=" + _0x4539f7
        },
        _0x40152b = await _0x410d63(_0x29125f, "取Token");
      if (_0x40152b.code == 0) {
        {
          this.valid = true;
          this.sessionId = _0x40152b.data.session.id;
          this.accountId = _0x40152b.data.session.account || _0x40152b.data.session.account_id;
          _0x275e90(_0xcc36bd + "_config", this.account, JSON.stringify({
            "id": this.accountId,
            "sessionId": this.sessionId
          }));
          _0x3edd55("账号[" + this.index + "],取Token成功 😄 ");
        }
      } else this.valid = false, _0x3edd55("账号[" + this.index + "],取Token:失败 🙁 了呢,原因：" + _0x40152b?.["message"]), console.log(_0x40152b);
    } catch (_0x1a7ffd) {
      console.log(_0x1a7ffd);
    }
  }
  async ["loginInit"](_0x4a276c) {
    try {
      {
        const _0x1dde76 = "";
        let _0xd33944 = "/api/account/init",
          _0xa6c221 = _0x2b8669.guid(),
          _0x4c8ce9 = _0x2b8669.ts13(),
          _0xb1114d = _0xd33944 + "&&" + _0xa6c221 + "&&" + _0x4c8ce9 + "&&" + this.key + "&&" + _0x298a48,
          _0xa13d06 = _0x2b8669.SHA256_Encrypt(_0xb1114d),
          _0x3ada1f = {
            "method": "POST",
            "url": "" + this.hostname + _0xd33944,
            "headers": {
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-SIGNATURE": _0xa13d06,
              "X-REQUEST-ID": _0xa6c221,
              "Content-Length": _0x1dde76?.["length"],
              "X-SESSION-ID": "",
              "X-TENANT-ID": _0x298a48,
              "X-TIMESTAMP": _0x4c8ce9
            },
            "form": _0x1dde76
          };
        this.authCookie && (_0x3ada1f.headers.Cookie = this.authCookie);
        let _0xefaa0e = await _0x410d63(_0x3ada1f, "登录初始化");
        _0xefaa0e.code == 0 ? (_0x3edd55("账号[" + this.index + "],登录初始化成功 😄 "), _0x4eb827 = _0xefaa0e.data.session.id, await this.loginByCode(_0xefaa0e.data.session.id, _0x4a276c)) : (this.valid = false, _0x3edd55("账号[" + this.index + "],登录初始化:失败 🙁 了呢,原因：" + _0xefaa0e?.["message"]));
      }
    } catch (_0x28a33e) {
      console.log(_0x28a33e);
    }
  }
  async ["login"]() {
    let _0x1be74b = "/web/oauth/credential_auth",
      _0x251d06 = _0x2b8669.guid(),
      _0x3154f1 = _0x2b8669.ts13(),
      _0x2ac6de = _0x1be74b + "&&" + _0x251d06 + "&&" + _0x3154f1 + "&&" + this.key + "&&" + _0x298a48,
      _0x3985a2 = _0x2b8669.SHA256_Encrypt(_0x2ac6de);
    try {
      {
        let _0x2b46a1 = {
          "method": "POST",
          "url": "https://passport.tmuyun.com/web/oauth/credential_auth",
          "headers": {
            "X-TIMESTAMP": _0x3154f1,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "passport.tmuyun.com",
            "Connection": "Keep-Alive",
            "X-SIGNATURE": _0x3985a2,
            "X-REQUEST-ID": _0x251d06
          },
          "form": "client_id=" + (_0x50287b || "10001") + "&password=" + encodeURIComponent(await this.RSA_Encrypt(this.password)) + "&phone_number=" + this.account
        };
        this.authCookie && (_0x2b46a1.headers.Cookie = this.authCookie);
        let _0x344660 = await _0x410d63(_0x2b46a1, "登录");
        if (_0x344660.code == 0) {
          {
            _0x3edd55("账号[" + this.index + "],登录成功 😄 ");
            if (!_0x4eb827) {
              await this.loginInit(_0x344660.data.authorization_code.code);
            } else await this.loginByCode(_0x4eb827, _0x344660.data.authorization_code.code);
          }
        } else this.valid = false, _0x3edd55("账号[" + this.index + "],登录:失败 🙁 了呢,原因：" + _0x344660?.["message"]), console.log(_0x344660);
      }
    } catch (_0x5db914) {
      console.log(_0x5db914);
    }
  }
  async ["app_start"]() {
    let _0x53378a = "/api/app_start_page/list/new",
      _0xeb2c45 = _0x2b8669.guid(),
      _0x258e51 = _0x2b8669.ts13(),
      _0x5d6f6a = _0x53378a + "&&" + _0x1f2c59 + "&&" + _0xeb2c45 + "&&" + _0x258e51 + "&&" + this.key + "&&" + _0x298a48,
      _0xb3ca0c = _0x2b8669.SHA256_Encrypt(_0x5d6f6a);
    try {
      let _0x40917c = {
          "method": "GET",
          "url": "" + this.hostname + _0x53378a + "?height=2206&width=1080",
          "headers": {
            "X-SESSION-ID": "" + _0x1f2c59,
            "X-REQUEST-ID": _0xeb2c45,
            "X-TIMESTAMP": _0x258e51,
            "X-SIGNATURE": _0xb3ca0c,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x4a1910 = await _0x410d63(_0x40917c, "App启动中");
      if (_0x4a1910.code == 0) _0x3edd55("账号[" + this.index + "],App启动成功 😄 ");else {
        _0x3edd55("账号[" + this.index + "],App启动:失败 🙁 了呢,原因：" + _0x4a1910?.["message"]);
      }
    } catch (_0x5bcfb4) {
      console.log(_0x5bcfb4);
    }
  }
  async ["web_start"]() {
    let _0x169bc6 = "/web/init",
      _0x1cf199 = _0x2b8669.guid(),
      _0x44a677 = _0x2b8669.ts13(),
      _0x592840 = _0x169bc6 + "&&" + _0x1f2c59 + "&&" + _0x1cf199 + "&&" + _0x44a677 + "&&" + this.key + "&&" + _0x298a48,
      _0x5a5042 = _0x2b8669.SHA256_Encrypt(_0x592840);
    try {
      {
        let _0x499a1b = {
            "method": "GET",
            "url": "https://passport.tmuyun.com/web/init?client_id=" + _0x50287b,
            "headers": {
              "X-SESSION-ID": "" + _0x1f2c59,
              "X-REQUEST-ID": _0x1cf199,
              "X-TIMESTAMP": _0x44a677,
              "X-SIGNATURE": _0x5a5042,
              "X-TENANT-ID": _0x298a48,
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": "passport.tmuyun.com",
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x54bea7 = await _0x410d63(_0x499a1b, "Web初始化中", true),
          _0x4423b5 = _0x54bea7?.["body"];
        if (_0x4423b5.code == 0) {
          let _0x30c4cb = _0x54bea7?.["rawHeaders"]?.["find"](_0x25e4e4 => _0x25e4e4?.["includes"]("SESSION"));
          _0x30c4cb && (this.authCookie = _0x30c4cb);
          _0x3edd55("账号[" + this.index + "],Web初始化成功 😄 ");
        } else _0x3edd55("账号[" + this.index + "],Web初始化:失败 🙁 了呢,原因：" + _0x4423b5?.["message"]);
      }
    } catch (_0x2b3c35) {
      console.log(_0x2b3c35);
    }
  }
  async ["iframe_start"]() {
    let _0x200c71 = "/api/bullet_frame/detail",
      _0xe320ad = _0x2b8669.guid(),
      _0x50320a = _0x2b8669.ts13(),
      _0x33edad = _0x200c71 + "&&" + _0x1f2c59 + "&&" + _0xe320ad + "&&" + _0x50320a + "&&" + this.key + "&&" + _0x298a48,
      _0x2a27bb = _0x2b8669.SHA256_Encrypt(_0x33edad);
    try {
      {
        let _0x196c0d = {
            "method": "GET",
            "url": "" + this.hostname + _0x200c71,
            "headers": {
              "X-SESSION-ID": "" + _0x1f2c59,
              "X-REQUEST-ID": _0xe320ad,
              "X-TIMESTAMP": _0x50320a,
              "X-SIGNATURE": _0x2a27bb,
              "X-TENANT-ID": _0x298a48,
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x32e949 = await _0x410d63(_0x196c0d, "启动WebView中");
        if (_0x32e949.code == 0) _0x3edd55("账号[" + this.index + "],启动WebView成功 😄 ");else {
          _0x3edd55("账号[" + this.index + "],启动WebView:失败 🙁 了呢,原因：" + _0x32e949?.["message"]);
        }
      }
    } catch (_0x364cef) {
      console.log(_0x364cef);
    }
  }
  async ["get_app_version"]() {
    let _0x576d4e = "/api/app_version/detail",
      _0x320676 = _0x2b8669.guid(),
      _0xebba68 = _0x2b8669.ts13(),
      _0x57dbec = _0x576d4e + "&&" + _0x1f2c59 + "&&" + _0x320676 + "&&" + _0xebba68 + "&&" + this.key + "&&" + _0x298a48,
      _0x456929 = _0x2b8669.SHA256_Encrypt(_0x57dbec);
    try {
      {
        let _0x118010 = {
            "method": "GET",
            "url": "" + this.hostname + _0x576d4e,
            "headers": {
              "X-SESSION-ID": "" + _0x1f2c59,
              "X-REQUEST-ID": _0x320676,
              "X-TIMESTAMP": _0xebba68,
              "X-SIGNATURE": _0x456929,
              "X-TENANT-ID": _0x298a48,
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Host": this.host,
              "Connection": "Keep-Alive"
            }
          },
          _0x415bc3 = await _0x410d63(_0x118010, "获取版本信息中");
        _0x415bc3.code == 0 ? _0x3edd55("账号[" + this.index + "],获取版本信息成功 😄 ") : _0x3edd55("账号[" + this.index + "],获取版本信息:失败 🙁 了呢,原因：" + _0x415bc3?.["message"]);
      }
    } catch (_0x2cdb91) {
      console.log(_0x2cdb91);
    }
  }
  async ["config_get"]() {
    let _0x2cce4a = "/api/app_version_customize_config/mine",
      _0x5aa464 = _0x2b8669.guid(),
      _0x257cc1 = _0x2b8669.ts13(),
      _0x72d1f7 = _0x2cce4a + "&&" + _0x1f2c59 + "&&" + _0x5aa464 + "&&" + _0x257cc1 + "&&" + this.key + "&&" + _0x298a48,
      _0x5aadcc = _0x2b8669.SHA256_Encrypt(_0x72d1f7);
    try {
      let _0x30d4c5 = {
          "method": "GET",
          "url": "" + this.hostname + _0x2cce4a,
          "headers": {
            "X-SESSION-ID": "" + _0x1f2c59,
            "X-REQUEST-ID": _0x5aa464,
            "X-TIMESTAMP": _0x257cc1,
            "X-SIGNATURE": _0x5aadcc,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive"
          }
        },
        _0x4b2cc0 = await _0x410d63(_0x30d4c5, "获取App配置中");
      _0x4b2cc0.code == 0 ? _0x3edd55("账号[" + this.index + "],获取App配置成功 😄 ") : _0x3edd55("账号[" + this.index + "],获取App配置:失败 🙁 了呢, 原因：" + _0x4b2cc0?.["message"]);
    } catch (_0x3d83d4) {
      console.log(_0x3d83d4);
    }
  }
  async ["get_unread_msg"]() {
    let _0x5d0a53 = "/api/chuanbo/unread",
      _0x4462aa = _0x2b8669.guid(),
      _0x3790d2 = _0x2b8669.ts13(),
      _0x5db149 = _0x5d0a53 + "&&" + this.sessionId + "&&" + _0x4462aa + "&&" + _0x3790d2 + "&&" + this.key + "&&" + _0x298a48,
      _0x6c00b8 = _0x2b8669.SHA256_Encrypt(_0x5db149);
    try {
      let _0x490c81 = {
          "method": "GET",
          "url": "" + this.hostname + _0x5d0a53,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x4462aa,
            "X-TIMESTAMP": _0x3790d2,
            "X-SIGNATURE": _0x6c00b8,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x301561 = await _0x410d63(_0x490c81, "获取未读信息");
      _0x301561.code == 0 ? _0x3edd55("账号[" + this.index + "],获取未读信息成功 😄 ") : _0x3edd55("账号[" + this.index + "],获取未读信息:失败 🙁 了呢,原因：" + _0x301561?.["message"]);
    } catch (_0x3bf43) {
      console.log(_0x3bf43);
    }
  }
  async ["task_comment_pre"]() {
    let _0x12c816 = "/api/app_feature_switch/list",
      _0x924ddc = _0x2b8669.guid(),
      _0x13651e = _0x2b8669.ts13(),
      _0x456a25 = _0x12c816 + "&&" + this.sessionId + "&&" + _0x924ddc + "&&" + _0x13651e + "&&" + this.key + "&&" + _0x298a48,
      _0x52ca8b = _0x2b8669.SHA256_Encrypt(_0x456a25);
    try {
      {
        let _0x2bba8e = {
            "method": "GET",
            "url": "" + this.hostname + _0x12c816,
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x924ddc,
              "X-TIMESTAMP": _0x13651e,
              "X-SIGNATURE": _0x52ca8b,
              "X-TENANT-ID": _0x298a48,
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            }
          },
          _0x4122c1 = await _0x410d63(_0x2bba8e, "文章准备工作");
        _0x4122c1.code == 0 ? _0x3edd55("账号[" + this.index + "],文章准备工作成功 😄 ") : _0x3edd55("账号[" + this.index + "],文章准备工作:失败 🙁 了呢,原因：" + _0x4122c1?.["message"]);
      }
    } catch (_0x49b172) {
      console.log(_0x49b172);
    }
  }
  async ["task_comment"](_0x59aafe) {
    let _0x2f7ac6 = _0xa7fc3b ? await this.txt_api() : _0x420f6e[Math.floor(Math.random() * _0x420f6e?.["length"])],
      _0xc96832 = "/api/comment/create",
      _0x3437b7 = _0x2b8669.guid(),
      _0x3def28 = _0x2b8669.ts13(),
      _0x41426f = _0xc96832 + "&&" + this.sessionId + "&&" + _0x3437b7 + "&&" + _0x3def28 + "&&" + this.key + "&&" + _0x298a48,
      _0x6670a0 = _0x2b8669.SHA256_Encrypt(_0x41426f);
    try {
      {
        let _0x5069ff = {
            "method": "POST",
            "url": "" + this.hostname + _0xc96832,
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x3437b7,
              "X-TIMESTAMP": _0x3def28,
              "X-SIGNATURE": _0x6670a0,
              "X-TENANT-ID": _0x298a48,
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            },
            "form": {
              "channel_article_id": _0x59aafe,
              "content": _0x2f7ac6
            }
          },
          _0x3727d1 = await _0x410d63(_0x5069ff, "评论");
        if (_0x3727d1.code == 0) {
          {
            const _0xfacff = this?.["jobList"]?.["find"](_0x58c091 => {
              return _0x58c091?.["name"]?.["includes"]("资讯评论") && _0x58c091?.["frequency"] > _0x58c091?.["finish_times"];
            });
            _0xfacff.finish_times++;
            _0x3edd55("账号[" + this.index + "],评论成功 😄 [" + _0x2f7ac6 + "]");
            const _0x1f5a8a = _0x3727d1?.["data"]?.["comment"]?.["id"];
            await _0x16893f(1 + Math.random() * 1);
            await this.deleteComment(_0x1f5a8a);
          }
        } else _0x3edd55("账号[" + this.index + "],评论:失败 🙁 了呢,原因：" + _0x3727d1?.["message"]), this.commentError = _0x3727d1?.["message"]?.["includes"]("请重新进入当前页面");
      }
    } catch (_0xd04c8d) {
      console.log(_0xd04c8d);
    }
  }
  async ["deleteComment"](_0xcf6d4e) {
    let _0xed300e = "/api/comment/delete",
      _0x51b176 = _0x2b8669.guid(),
      _0xf5858e = _0x2b8669.ts13(),
      _0x1ba15f = _0xed300e + "&&" + this.sessionId + "&&" + _0x51b176 + "&&" + _0xf5858e + "&&" + this.key + "&&" + _0x298a48,
      _0x2ab62e = _0x2b8669.SHA256_Encrypt(_0x1ba15f);
    try {
      let _0x5918d9 = {
          "method": "POST",
          "url": "" + this.hostname + _0xed300e,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x51b176,
            "X-TIMESTAMP": _0xf5858e,
            "X-SIGNATURE": _0x2ab62e,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "comment_id": _0xcf6d4e
          }
        },
        _0x8d3c2c = await _0x410d63(_0x5918d9, "删除评论");
      if (_0x8d3c2c.code == 0) _0x3edd55("账号[" + this.index + "], 删除评论成功 😄 ");else {
        _0x3edd55("账号[" + this.index + "],删除评论失败 🙁 了呢,原因：" + _0x8d3c2c?.["message"]);
      }
    } catch (_0x5429cf) {
      console.log(_0x5429cf);
    }
  }
  async ["task_share"](_0x5e27b4, _0x3f8d2c, _0x1ecbf9) {
    let _0x37b717 = "/api/user_mumber/doTask",
      _0x2a5d81 = _0x2b8669.guid(),
      _0x8f1322 = _0x2b8669.ts13(),
      _0x3586f4 = _0x37b717 + "&&" + this.sessionId + "&&" + _0x2a5d81 + "&&" + _0x8f1322 + "&&" + this.key + "&&" + _0x298a48,
      _0x5284c2 = _0x2b8669.SHA256_Encrypt(_0x3586f4);
    try {
      let _0x4444fc = {
          "method": "POST",
          "url": "" + this.hostname + _0x37b717,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x2a5d81,
            "X-TIMESTAMP": _0x8f1322,
            "X-SIGNATURE": _0x5284c2,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          },
          "form": {
            "memberType": _0x5e27b4,
            "member_type": _0x5e27b4,
            "target_id": _0x3f8d2c
          }
        },
        _0x82a4ce = await _0x410d63(_0x4444fc, _0x1ecbf9);
      if (_0x82a4ce.code == 0) {
        const _0x4ee1b7 = this?.["jobList"]?.["find"](_0x37aa83 => {
          return _0x37aa83?.["name"]?.["includes"](_0x5e27b4 === "3" ? "分享资讯" : "使用本地服务") && _0x37aa83?.["frequency"] > _0x37aa83?.["finish_times"];
        });
        _0x4ee1b7 && _0x4ee1b7.finish_times++;
        _0x3edd55("账号[" + this.index + "]," + _0x1ecbf9 + "成功 😄 ");
        _0x82a4ce.data && "账号[" + this.index + "]," + _0x1ecbf9 + ("执行完毕共获得:[" + _0x82a4ce.data.score_notify.integral + "]");
      } else {
        _0x3edd55("账号[" + this.index + "], " + _0x1ecbf9 + " :失败 🙁 了呢,原因：" + _0x82a4ce?.["message"]);
        console.log(_0x82a4ce);
      }
    } catch (_0x5a13d2) {
      console.log(_0x5a13d2);
    }
  }
  async ["user_info"]() {
    let _0x58565a = "/api/user_mumber/account_detail",
      _0x1739a7 = _0x2b8669.guid(),
      _0x3105e9 = _0x2b8669.ts13(),
      _0x42556b = _0x58565a + "&&" + this.sessionId + "&&" + _0x1739a7 + "&&" + _0x3105e9 + "&&" + this.key + "&&" + _0x298a48,
      _0x4bf60f = _0x2b8669.SHA256_Encrypt(_0x42556b);
    try {
      let _0x1f30d9 = {
          "method": "GET",
          "url": "" + this.hostname + _0x58565a,
          "headers": {
            "X-SESSION-ID": "" + this.sessionId,
            "X-REQUEST-ID": _0x1739a7,
            "X-TIMESTAMP": _0x3105e9,
            "X-SIGNATURE": _0x4bf60f,
            "X-TENANT-ID": _0x298a48,
            "User-Agent": _0x35be5a,
            "Cache-Control": "no-cache",
            "Host": this.host,
            "Connection": "Keep-Alive",
            "X-ACCOUNT-ID": this.accountId
          }
        },
        _0x91a5b8 = await _0x410d63(_0x1f30d9, "用户信息");
      if (_0x91a5b8.code == 0) {
        this.valid = true;
        this.requestedUserInfo = true;
        _0x3edd55("账号[" + this.index + "],验证成功 😄 ，账号可正常使用，[" + _0x91a5b8.data.rst.nick_name + "]");
        if (_0x91a5b8.data.rst.ref_user_uid == "") {
          await this.share_code("推荐");
        }
      } else this.valid = false, _0x91a5b8?.["message"]?.["includes"]("Session无效或者过期") ? _0x3edd55("账号[" + this.index + "],验证失败 🙁 了呢,请检查配置是否正确 或者 账户凭证是否过期；请看脚本头部说明，如果是老脚本配置，需在配置文件配置：export zslcOldConfigTranform='true'") : _0x3edd55("账号[" + this.index + "],验证失败 🙁 了呢,原因：" + _0x91a5b8?.["message"]);
    } catch (_0x5863c6) {
      console.log(_0x5863c6);
    }
  }
  async ["share_code"](_0x28ce9e) {
    let _0x8916fa = "/api/account/update_ref_code",
      _0x2eb864 = _0x2b8669.guid(),
      _0x1a89da = _0x2b8669.ts13(),
      _0xfedde1 = _0x8916fa + "&&" + this.sessionId + "&&" + _0x2eb864 + "&&" + _0x1a89da + "&&" + this.key + "&&" + _0x298a48,
      _0x587a4e = _0x2b8669.SHA256_Encrypt(_0xfedde1);
    try {
      {
        let _0x45b3cd = {
            "method": "POST",
            "url": "" + this.hostname + _0x8916fa,
            "headers": {
              "X-SESSION-ID": "" + this.sessionId,
              "X-REQUEST-ID": _0x2eb864,
              "X-TIMESTAMP": _0x1a89da,
              "X-SIGNATURE": _0x587a4e,
              "X-TENANT-ID": _0x298a48,
              "User-Agent": _0x35be5a,
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Host": this.host,
              "Connection": "Keep-Alive",
              "X-ACCOUNT-ID": this.accountId
            },
            "form": {
              "ref_code": _0x1ff788 || "WET28W"
            }
          },
          _0x2579af = await _0x410d63(_0x45b3cd, _0x28ce9e);
        if (_0x2579af.code == 0) {} else {}
      }
    } catch (_0x32011e) {
      console.log(_0x32011e);
    }
  }
}
!(async () => {
  _0x3edd55("开始读取配置的数据……");
  if (!(await _0x5b48ce())) return;
  _0xae4d35.length > 0 ? (_0x3edd55(_0x43f551), await _0x16893f(0.1), await _0x22d910()) : (console.log("无可用账号，停止执行\n" + _0x4cb93c), exit());
  await _0x3c5619(_0x11c641?.["name"] + "：" + _0x415d0c + "\n" + _0x1bec66);
})().catch(_0x42ee0f => console.log(_0x42ee0f)).finally(() => _0x11c641.done());
function _0x275e90(_0x54e5eb, _0x1fc3c7, _0x59523e) {
  let _0x299f25 = {},
    _0x5aa699 = {};
  try {
    _0x299f25 = _0xae2324.readFileSync(_0x54e5eb + ".json", "utf8");
    _0x5aa699 = JSON.parse(_0x299f25);
  } catch (_0x514cb2) {}
  _0x5aa699[_0x1fc3c7] = _0x59523e;
  const _0x453429 = JSON.stringify(_0x5aa699);
  try {
    _0xae2324.writeFileSync(_0x54e5eb + ".json", _0x453429);
  } catch (_0x592766) {
    if (_0x592766.code === "ENOENT") {
      _0xae2324.writeFileSync(_0x54e5eb + ".json", _0x453429);
    } else {
      console.error("保存文件时发生错误：", _0x592766);
    }
  }
}
function _0x2f2cbe(_0x32285e, _0x23fbc7) {
  try {
    {
      const _0x40755a = _0xae2324.readFileSync(_0x32285e + ".json", "utf8"),
        _0x8e08a2 = JSON.parse(_0x40755a);
      return _0x8e08a2[_0x23fbc7];
    }
  } catch (_0x1caeec) {
    if (_0x1caeec.code === "ENOENT") {
      return undefined;
    } else {
      console.error("读取文件时发生错误：", _0x1caeec);
    }
  }
}
async function _0x5b48ce() {
  if (_0x1e42c0) {
    {
      let _0x4bcaf8 = _0x8e0686[0];
      for (let _0x4699b8 of _0x8e0686) if (_0x1e42c0.indexOf(_0x4699b8) > -1) {
        _0x4bcaf8 = _0x4699b8;
        break;
      }
      for (let _0x3ae432 of _0x1e42c0.split(_0x4bcaf8)) _0x3ae432 && _0xae4d35.push(new _0x34f5f0(_0x2f0495 && _0x3ae432?.["includes"]("&") ? _0x3ae432?.["split"]("&") : _0x3ae432?.["split"]("#")));
      _0x5e01b1 = _0xae4d35.length;
    }
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x5e01b1 + "个账号");
  return true;
}
async function _0x410d63(_0x2270d9, _0x7d5151, _0x58b6d2) {
  return new Promise(_0x56cd0d => {
    if (!_0x7d5151) {
      let _0x4a3a95 = arguments.callee.toString(),
        _0x21d90e = /function\s*(\w*)/i,
        _0x9cc91f = _0x21d90e.exec(_0x4a3a95);
      _0x7d5151 = _0x9cc91f[1];
    }
    _0x2f3b9b && (console.log("\n【debug】===============这是" + _0x7d5151 + "请求信息==============="), console.log(_0x2270d9));
    if (_0x2f3b9b) {
      _0x2270d9.rejectUnauthorized = false;
    }
    _0x311511(_0x2270d9, function (_0x5b12f1, _0x4e0141) {
      if (_0x5b12f1) throw new Error(_0x5b12f1);
      let _0x258e08 = _0x4e0141.body;
      try {
        _0x2f3b9b && (console.log("\n\n【debug】===============这是" + _0x7d5151 + "返回数据=============="), console.log(_0x258e08));
        if (typeof _0x258e08 == "string") {
          if (_0xe12aca(_0x258e08)) {
            {
              let _0x466b2b = JSON.parse(_0x258e08);
              _0x2f3b9b && (console.log("\n【debug】=============这是" + _0x7d5151 + "json解析后数据============"), console.log(_0x466b2b));
              if (!_0x58b6d2) _0x56cd0d(_0x466b2b);else {
                _0x56cd0d({
                  ..._0x4e0141,
                  "body": _0x466b2b
                });
              }
            }
          } else {
            let _0x5cf5c0 = _0x258e08;
            if (!_0x58b6d2) _0x56cd0d(_0x5cf5c0);else {
              _0x56cd0d({
                ..._0x4e0141,
                "body": _0x5cf5c0
              });
            }
          }
          function _0xe12aca(_0x136311) {
            {
              if (typeof _0x136311 == "string") try {
                {
                  if (typeof JSON.parse(_0x136311) == "object") return true;
                }
              } catch (_0x338afb) {
                return false;
              }
              return false;
            }
          }
        } else {
          let _0x23ce5e = _0x258e08;
          !_0x58b6d2 ? _0x56cd0d(_0x23ce5e) : _0x56cd0d({
            ..._0x4e0141,
            "body": _0x23ce5e
          });
        }
      } catch (_0x1b55de) {
        console.log(_0x5b12f1, _0x4e0141);
        console.log("\n " + _0x7d5151 + "失败了!请稍后尝试!!");
      } finally {
        _0x56cd0d();
      }
    });
  });
}
function _0x16893f(_0x23d4df) {
  return new Promise(function (_0x2c4ec9) {
    setTimeout(_0x2c4ec9, _0x23d4df * 1000);
  });
}
function _0x3edd55(_0x2d064f) {
  if (_0x11c641.isNode()) {
    {
      if (_0x2d064f) {
        console.log("" + _0x2d064f);
        _0x550e84 += "" + _0x2d064f;
      }
    }
  } else {
    console.log("" + _0x2d064f);
    msg += "" + _0x2d064f;
  }
}
async function _0x3c5619(_0x3eb794) {
  if (!_0x3eb794) return;
  if (_0x38564e > 0) {
    {
      if (_0x11c641.isNode()) {
        {
          var _0x229a18 = require("./sendNotify");
          await _0x229a18.sendNotify(_0x11c641.name, _0x3eb794);
        }
      } else {
        _0x11c641.msg(_0x11c641.name, "", _0x3eb794);
      }
    }
  } else console.log("通知服务未开启，不予推送：", _0x3eb794);
}
function _0x41b0d7() {
  _0x11c641.isNode() && (process.on("uncaughtException", function (_0x346728) {
    if (_0x346728.code === "MODULE_NOT_FOUND") {
      {
        const _0x4e016d = _0x346728.message.split("'")[1];
        if (_0x4e016d.startsWith("./")) console.log("缺少依赖文件，请前往代码库寻找 " + _0x4e016d?.["replace"]("./", "")?.["replace"]("../", "") + " 代码文件，放在本脚本同一目录下 \n 什么？不会？v我50我教你！");else {
          console.log("缺少依赖，请安装 " + _0x4e016d + " 库： " + _0x4e016d + " \n 什么？不会？v我50我教你！");
        }
      }
    } else {
      console.log("发生错误：" + _0x346728.message);
    }
  }), process.on("unhandledRejection", function (_0x57b6a1) {
    {
      const _0x370b96 = _0x57b6a1.stack.split("\n");
      if (_0x370b96.length > 1) {
        {
          const _0x42cef1 = _0x370b96[1],
            _0x53e872 = _0x42cef1.match(/\((.*):(\d+):(\d+)\)/);
          if (_0x53e872) {
            {
              const _0x232241 = _0x53e872[1],
                _0x479e24 = _0x53e872[2];
              console.log("程序执行出现异常，错误信息：" + _0x57b6a1.message + ("，错误发生在 " + _0x232241 + " 的第 " + _0x479e24 + " 行 \n 请在本仓库建立 issue 并附上日志或者截图即可？什么，很着急？v我50疯狂星期四！"));
            }
          }
        }
      } else console.log("发生错误：" + _0x57b6a1.message);
    }
  }));
}
function _0x19feb6(_0xe73fa1, _0x5511e3) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x1a2549 {
    constructor(_0x4d6f39) {
      this.env = _0x4d6f39;
    }
    ["send"](_0x17370a, _0x46eeae = "GET") {
      _0x17370a = "string" == typeof _0x17370a ? {
        "url": _0x17370a
      } : _0x17370a;
      let _0x28b1f3 = this.get;
      "POST" === _0x46eeae && (_0x28b1f3 = this.post);
      return new Promise((_0xf43b59, _0x55fd51) => {
        _0x28b1f3.call(this, _0x17370a, (_0x28358f, _0x33e641, _0x289aed) => {
          _0x28358f ? _0x55fd51(_0x28358f) : _0xf43b59(_0x33e641);
        });
      });
    }
    ["get"](_0x438625) {
      return this.send.call(this.env, _0x438625);
    }
    ["post"](_0x51ffc3) {
      return this.send.call(this.env, _0x51ffc3, "POST");
    }
  }
  return new class {
    constructor(_0xe97cc4, _0x56e723) {
      this.name = _0xe97cc4;
      this.http = new _0x1a2549(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x56e723);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x11de65, _0x2b009b = null) {
      try {
        return JSON.parse(_0x11de65);
      } catch {
        return _0x2b009b;
      }
    }
    ["toStr"](_0x14644f, _0x2964b3 = null) {
      try {
        return JSON.stringify(_0x14644f);
      } catch {
        return _0x2964b3;
      }
    }
    ["getjson"](_0x534161, _0x532ebc) {
      let _0x5cfb3e = _0x532ebc;
      const _0xb46e6a = this.getdata(_0x534161);
      if (_0xb46e6a) try {
        _0x5cfb3e = JSON.parse(this.getdata(_0x534161));
      } catch {}
      return _0x5cfb3e;
    }
    ["setjson"](_0x2bbc46, _0x2338be) {
      try {
        return this.setdata(JSON.stringify(_0x2bbc46), _0x2338be);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x1cc97e) {
      return new Promise(_0x350a36 => {
        this.get({
          "url": _0x1cc97e
        }, (_0x244531, _0x56f355, _0x25cc1f) => _0x350a36(_0x25cc1f));
      });
    }
    ["runScript"](_0x5ec2da, _0x4df0e3) {
      return new Promise(_0x5d2521 => {
        {
          let _0x5ea0d5 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0x5ea0d5 = _0x5ea0d5 ? _0x5ea0d5.replace(/\n/g, "").trim() : _0x5ea0d5;
          let _0x29f5c0 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0x29f5c0 = _0x29f5c0 ? 1 * _0x29f5c0 : 20;
          _0x29f5c0 = _0x4df0e3 && _0x4df0e3.timeout ? _0x4df0e3.timeout : _0x29f5c0;
          const [_0x442f4b, _0x1a4bd6] = _0x5ea0d5.split("@"),
            _0x185818 = {
              "url": "http://" + _0x1a4bd6 + "/v1/scripting/evaluate",
              "body": {
                "script_text": _0x5ec2da,
                "mock_type": "cron",
                "timeout": _0x29f5c0
              },
              "headers": {
                "X-Key": _0x442f4b,
                "Accept": "*/*"
              }
            };
          this.post(_0x185818, (_0x2639e7, _0x522bde, _0x248dd9) => _0x5d2521(_0x248dd9));
        }
      }).catch(_0xd5390c => this.logErr(_0xd5390c));
    }
    ["loaddata"]() {
      {
        if (!this.isNode()) return {};
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0xaa870e = this.path.resolve(this.dataFile),
            _0x37fb9e = this.path.resolve(process.cwd(), this.dataFile),
            _0x563eb6 = this.fs.existsSync(_0xaa870e),
            _0x1b57fe = !_0x563eb6 && this.fs.existsSync(_0x37fb9e);
          if (!_0x563eb6 && !_0x1b57fe) return {};
          {
            {
              const _0x2b376f = _0x563eb6 ? _0xaa870e : _0x37fb9e;
              try {
                return JSON.parse(this.fs.readFileSync(_0x2b376f));
              } catch (_0x1546d5) {
                return {};
              }
            }
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x340be3 = this.path.resolve(this.dataFile),
            _0x3a06c1 = this.path.resolve(process.cwd(), this.dataFile),
            _0x39a89a = this.fs.existsSync(_0x340be3),
            _0xbd8d44 = !_0x39a89a && this.fs.existsSync(_0x3a06c1),
            _0x1f5517 = JSON.stringify(this.data);
          _0x39a89a ? this.fs.writeFileSync(_0x340be3, _0x1f5517) : _0xbd8d44 ? this.fs.writeFileSync(_0x3a06c1, _0x1f5517) : this.fs.writeFileSync(_0x340be3, _0x1f5517);
        }
      }
    }
    ["lodash_get"](_0x4293b8, _0x58c5bc, _0x4707de) {
      const _0x547b8d = _0x58c5bc.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xfcf267 = _0x4293b8;
      for (const _0x9e2ed1 of _0x547b8d) if (_0xfcf267 = Object(_0xfcf267)[_0x9e2ed1], undefined === _0xfcf267) return _0x4707de;
      return _0xfcf267;
    }
    ["lodash_set"](_0x55d58a, _0xf1b6ee, _0x5d205b) {
      return Object(_0x55d58a) !== _0x55d58a ? _0x55d58a : (Array.isArray(_0xf1b6ee) || (_0xf1b6ee = _0xf1b6ee.toString().match(/[^.[\]]+/g) || []), _0xf1b6ee.slice(0, -1).reduce((_0x3b4923, _0x117b35, _0x1485d5) => Object(_0x3b4923[_0x117b35]) === _0x3b4923[_0x117b35] ? _0x3b4923[_0x117b35] : _0x3b4923[_0x117b35] = Math.abs(_0xf1b6ee[_0x1485d5 + 1]) >> 0 == +_0xf1b6ee[_0x1485d5 + 1] ? [] : {}, _0x55d58a)[_0xf1b6ee[_0xf1b6ee.length - 1]] = _0x5d205b, _0x55d58a);
    }
    ["getdata"](_0xefaa36) {
      {
        let _0xcfaf4b = this.getval(_0xefaa36);
        if (/^@/.test(_0xefaa36)) {
          const [, _0x3a0a10, _0x186b33] = /^@(.*?)\.(.*?)$/.exec(_0xefaa36),
            _0x6cee49 = _0x3a0a10 ? this.getval(_0x3a0a10) : "";
          if (_0x6cee49) try {
            {
              const _0x3f0179 = JSON.parse(_0x6cee49);
              _0xcfaf4b = _0x3f0179 ? this.lodash_get(_0x3f0179, _0x186b33, "") : _0xcfaf4b;
            }
          } catch (_0x412e4b) {
            _0xcfaf4b = "";
          }
        }
        return _0xcfaf4b;
      }
    }
    ["setdata"](_0x25dbc3, _0xa9615b) {
      let _0x1665d9 = false;
      if (/^@/.test(_0xa9615b)) {
        const [, _0x6edd96, _0x1a76ad] = /^@(.*?)\.(.*?)$/.exec(_0xa9615b),
          _0x4355ac = this.getval(_0x6edd96),
          _0x35501f = _0x6edd96 ? "null" === _0x4355ac ? null : _0x4355ac || "{}" : "{}";
        try {
          const _0x473edd = JSON.parse(_0x35501f);
          this.lodash_set(_0x473edd, _0x1a76ad, _0x25dbc3);
          _0x1665d9 = this.setval(JSON.stringify(_0x473edd), _0x6edd96);
        } catch (_0x528503) {
          {
            const _0x2b4c34 = {};
            this.lodash_set(_0x2b4c34, _0x1a76ad, _0x25dbc3);
            _0x1665d9 = this.setval(JSON.stringify(_0x2b4c34), _0x6edd96);
          }
        }
      } else _0x1665d9 = this.setval(_0x25dbc3, _0xa9615b);
      return _0x1665d9;
    }
    ["getval"](_0x32711d) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x32711d) : this.isQuanX() ? $prefs.valueForKey(_0x32711d) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x32711d]) : this.data && this.data[_0x32711d] || null;
    }
    ["setval"](_0x4ad184, _0x234c2b) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4ad184, _0x234c2b) : this.isQuanX() ? $prefs.setValueForKey(_0x4ad184, _0x234c2b) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x234c2b] = _0x4ad184, this.writedata(), true) : this.data && this.data[_0x234c2b] || null;
    }
    ["initGotEnv"](_0x3cf409) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3cf409 && (_0x3cf409.headers = _0x3cf409.headers ? _0x3cf409.headers : {}, undefined === _0x3cf409.headers.Cookie && undefined === _0x3cf409.cookieJar && (_0x3cf409.cookieJar = this.ckjar));
    }
    ["get"](_0x20ee7f, _0x4e8794 = () => {}) {
      _0x20ee7f.headers && (delete _0x20ee7f.headers["Content-Type"], delete _0x20ee7f.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x20ee7f.headers = _0x20ee7f.headers || {}, Object.assign(_0x20ee7f.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x20ee7f, (_0x42fff7, _0x2becd8, _0x507da6) => {
        !_0x42fff7 && _0x2becd8 && (_0x2becd8.body = _0x507da6, _0x2becd8.statusCode = _0x2becd8.status);
        _0x4e8794(_0x42fff7, _0x2becd8, _0x507da6);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x20ee7f.opts = _0x20ee7f.opts || {}, Object.assign(_0x20ee7f.opts, {
        "hints": false
      })), $task.fetch(_0x20ee7f).then(_0xe88372 => {
        {
          const {
            statusCode: _0x42b75f,
            statusCode: _0x57379b,
            headers: _0x73b360,
            body: _0x5071b9
          } = _0xe88372;
          _0x4e8794(null, {
            "status": _0x42b75f,
            "statusCode": _0x57379b,
            "headers": _0x73b360,
            "body": _0x5071b9
          }, _0x5071b9);
        }
      }, _0x292fda => _0x4e8794(_0x292fda))) : this.isNode() && (this.initGotEnv(_0x20ee7f), this.got(_0x20ee7f).on("redirect", (_0x2a56e2, _0x54d7b9) => {
        try {
          if (_0x2a56e2.headers["set-cookie"]) {
            const _0xbdb9f3 = _0x2a56e2.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0xbdb9f3 && this.ckjar.setCookieSync(_0xbdb9f3, null);
            _0x54d7b9.cookieJar = this.ckjar;
          }
        } catch (_0x27735c) {
          this.logErr(_0x27735c);
        }
      }).then(_0xaaf3e1 => {
        {
          const {
            statusCode: _0x41c43a,
            statusCode: _0x267fe6,
            headers: _0x2467b1,
            body: _0x189e2c
          } = _0xaaf3e1;
          _0x4e8794(null, {
            "status": _0x41c43a,
            "statusCode": _0x267fe6,
            "headers": _0x2467b1,
            "body": _0x189e2c
          }, _0x189e2c);
        }
      }, _0xc4a540 => {
        const {
          message: _0x4c7926,
          response: _0x317bb4
        } = _0xc4a540;
        _0x4e8794(_0x4c7926, _0x317bb4, _0x317bb4 && _0x317bb4.body);
      }));
    }
    ["post"](_0xc0fd99, _0x2b7cd8 = () => {}) {
      if (_0xc0fd99.body && _0xc0fd99.headers && !_0xc0fd99.headers["Content-Type"] && (_0xc0fd99.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0xc0fd99.headers && delete _0xc0fd99.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0xc0fd99.headers = _0xc0fd99.headers || {}, Object.assign(_0xc0fd99.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(_0xc0fd99, (_0x19b9e9, _0x3f6d89, _0x21b8ba) => {
        !_0x19b9e9 && _0x3f6d89 && (_0x3f6d89.body = _0x21b8ba, _0x3f6d89.statusCode = _0x3f6d89.status);
        _0x2b7cd8(_0x19b9e9, _0x3f6d89, _0x21b8ba);
      });else {
        if (this.isQuanX()) _0xc0fd99.method = "POST", this.isNeedRewrite && (_0xc0fd99.opts = _0xc0fd99.opts || {}, Object.assign(_0xc0fd99.opts, {
          "hints": false
        })), $task.fetch(_0xc0fd99).then(_0x49bed0 => {
          {
            const {
              statusCode: _0x4e691b,
              statusCode: _0x4cb871,
              headers: _0x2a1ed6,
              body: _0x399f2c
            } = _0x49bed0;
            _0x2b7cd8(null, {
              "status": _0x4e691b,
              "statusCode": _0x4cb871,
              "headers": _0x2a1ed6,
              "body": _0x399f2c
            }, _0x399f2c);
          }
        }, _0x265893 => _0x2b7cd8(_0x265893));else {
          if (this.isNode()) {
            this.initGotEnv(_0xc0fd99);
            const {
              url: _0x2d75d4,
              ..._0x396935
            } = _0xc0fd99;
            this.got.post(_0x2d75d4, _0x396935).then(_0x4c266b => {
              {
                const {
                  statusCode: _0x45c5f2,
                  statusCode: _0x262aec,
                  headers: _0x27dc55,
                  body: _0x3cb11b
                } = _0x4c266b;
                _0x2b7cd8(null, {
                  "status": _0x45c5f2,
                  "statusCode": _0x262aec,
                  "headers": _0x27dc55,
                  "body": _0x3cb11b
                }, _0x3cb11b);
              }
            }, _0x5a62da => {
              {
                const {
                  message: _0x36af15,
                  response: _0x40d760
                } = _0x5a62da;
                _0x2b7cd8(_0x36af15, _0x40d760, _0x40d760 && _0x40d760.body);
              }
            });
          }
        }
      }
    }
    ["time"](_0x1fc8cd, _0x2d89f1 = null) {
      const _0x44ff94 = _0x2d89f1 ? new Date(_0x2d89f1) : new Date();
      let _0x614b13 = {
        "M+": _0x44ff94.getMonth() + 1,
        "d+": _0x44ff94.getDate(),
        "H+": _0x44ff94.getHours(),
        "m+": _0x44ff94.getMinutes(),
        "s+": _0x44ff94.getSeconds(),
        "q+": Math.floor((_0x44ff94.getMonth() + 3) / 3),
        "S": _0x44ff94.getMilliseconds()
      };
      /(y+)/.test(_0x1fc8cd) && (_0x1fc8cd = _0x1fc8cd.replace(RegExp.$1, (_0x44ff94.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4b0d0a in _0x614b13) new RegExp("(" + _0x4b0d0a + ")").test(_0x1fc8cd) && (_0x1fc8cd = _0x1fc8cd.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x614b13[_0x4b0d0a] : ("00" + _0x614b13[_0x4b0d0a]).substr(("" + _0x614b13[_0x4b0d0a]).length)));
      return _0x1fc8cd;
    }
    ["msg"](_0x2bf66d = _0xe73fa1, _0x338953 = "", _0xc5b94a = "", _0x13a50b) {
      {
        const _0x47bd44 = _0x73efdf => {
          {
            if (!_0x73efdf) return _0x73efdf;
            if ("string" == typeof _0x73efdf) return this.isLoon() ? _0x73efdf : this.isQuanX() ? {
              "open-url": _0x73efdf
            } : this.isSurge() ? {
              "url": _0x73efdf
            } : undefined;
            if ("object" == typeof _0x73efdf) {
              if (this.isLoon()) {
                {
                  let _0x1ba121 = _0x73efdf.openUrl || _0x73efdf.url || _0x73efdf["open-url"],
                    _0x24704c = _0x73efdf.mediaUrl || _0x73efdf["media-url"];
                  return {
                    "openUrl": _0x1ba121,
                    "mediaUrl": _0x24704c
                  };
                }
              }
              if (this.isQuanX()) {
                let _0x28f839 = _0x73efdf["open-url"] || _0x73efdf.url || _0x73efdf.openUrl,
                  _0x3f0800 = _0x73efdf["media-url"] || _0x73efdf.mediaUrl;
                return {
                  "open-url": _0x28f839,
                  "media-url": _0x3f0800
                };
              }
              if (this.isSurge()) {
                let _0x371f21 = _0x73efdf.url || _0x73efdf.openUrl || _0x73efdf["open-url"];
                return {
                  "url": _0x371f21
                };
              }
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x2bf66d, _0x338953, _0xc5b94a, _0x47bd44(_0x13a50b)) : this.isQuanX() && $notify(_0x2bf66d, _0x338953, _0xc5b94a, _0x47bd44(_0x13a50b))), !this.isMuteLog) {
          {
            let _0x349de3 = ["", "==============📣系统通知📣=============="];
            _0x349de3.push(_0x2bf66d);
            _0x338953 && _0x349de3.push(_0x338953);
            _0xc5b94a && _0x349de3.push(_0xc5b94a);
            console.log(_0x349de3.join("\n"));
            this.logs = this.logs.concat(_0x349de3);
          }
        }
      }
    }
    ["log"](..._0x4bf1ee) {
      _0x4bf1ee.length > 0 && (this.logs = [...this.logs, ..._0x4bf1ee]);
      console.log(_0x4bf1ee.join(this.logSeparator));
    }
    ["logErr"](_0x462406, _0x404fc8) {
      {
        const _0x201add = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        _0x201add ? this.log("", "❗️" + this.name + ", 错误!", _0x462406.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x462406);
      }
    }
    ["wait"](_0x7f2382) {
      return new Promise(_0x5c393c => setTimeout(_0x5c393c, _0x7f2382));
    }
    ["done"](_0xd71cde = {}) {
      {
        const _0x3bb29a = new Date().getTime(),
          _0x222ff8 = (_0x3bb29a - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x222ff8 + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0xd71cde);
      }
    }
  }(_0xe73fa1, _0x5511e3);
}