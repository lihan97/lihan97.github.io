# 推送到 GitHub 的步骤

你的本地仓库已配置完成，现在可以推送到 GitHub。

## 选项 1：使用 Personal Access Token（推荐）

1. 生成 GitHub Personal Access Token：
   - 访问：https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   - 选择 `repo` 权限
   - 复制生成的 token

2. 在终端运行推送命令：
   ```bash
   cd /Users/lihan/Desktop/projects/lihan97.github.io-main
   git push -u origin main
   ```
   
3. 当提示输入用户名和密码时：
   - 用户名：lihan97
   - 密码：粘贴你的 Personal Access Token

## 选项 2：使用 SSH（更安全）

1. 如果已配置 SSH keys，直接修改 remote：
   ```bash
   git remote set-url origin git@github.com:lihan97/lihan97.github.io.git
   git push -u origin main
   ```

2. 如果未配置 SSH，参考：https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## 推送后的 SEO 配置

✅ 已为你配置的 SEO 要素：

1. **Sitemap** (`sitemap.xml`)
   - 帮助搜索引擎发现所有页面
   - 包含所有论文、新闻和主页

2. **Robots.txt** (`robots.txt`)
   - 指导搜索引擎爬虫
   - 告诉搜索引擎 sitemap 位置

3. **Meta 标签**
   - Description：关键词和简介
   - Keywords：李晗、AI、Deep Learning、南开大学等
   - Open Graph：用于社交媒体分享优化
   - Canonical URL：避免重复内容问题

4. **关键词**（已内置）
   - 英文：Han Li, AI, Life Science, Deep Learning, Nankai University
   - 中文：李晗, 深度学习, 南开大学, 生物信息学等

## Google/Baidu 搜索引擎提交

推送到 GitHub 后，还可以进一步优化：

### Google Search Console
1. 访问：https://search.google.com/search-console
2. 登录 Google 账户
3. 添加属性：https://lihan97.github.io
4. 验证所有权
5. 提交 sitemap：https://lihan97.github.io/sitemap.xml

### Baidu Search Console
1. 访问：https://ziyuan.baidu.com/
2. 登录百度账户
3. 添加网站：https://lihan97.github.io
4. 验证所有权
5. 提交 sitemap：https://lihan97.github.io/sitemap.xml

## 等待索引

搜索引擎通常需要 1-2 周才能完全索引你的网站。

注：一旦推送到 GitHub，Google 和 Baidu 会在 sitemap 中找到你的页面，包括：
- 主页 (index.html)
- 中文页 (index_zh.html)  
- 论文页 (publications.html)
- 所有论文和新闻条目

这样搜索 "李晗 南开大学" 或 "Han Li Nankai" 就能找到你的页面了。
