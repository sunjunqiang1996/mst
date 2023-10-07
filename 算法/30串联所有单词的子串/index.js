
/**
 * 记 words的长度为 m，words中每个单词的长度为 n，s 的长度为 ls。首先需要将 s 划分为单词组，每个单词的大小均为 n （首尾除外）。这样的划分方法有 n 种，即先删去前 i （i=0∼n−1）个字母后，将剩下的字母进行划分，如果末尾有不到 n 个字母也删去。对这 n 种划分得到的单词数组分别使用滑动窗口对 words进行类似于「字母异位词」的搜寻。

  划分成单词组后，一个窗口包含 s 中前 m 个单词，用一个哈希表 differ 表示窗口中单词频次和 words 中单词频次之差。初始化 differ 时，出现在窗口中的单词，每出现一次，相应的值增加 1，出现在 words 中的单词，每出现一次，相应的值减少 1。然后将窗口右移，右侧会加入一个单词，左侧会移出一个单词，并对 differ 做相应的更新。窗口移动时，若出现 differ 中值不为 0 的键的数量为 0，则表示这个窗口中的单词频次和 words 中单词频次相同，窗口的左端点是一个待求的起始位置。划分的方法有 n 种，做 n 次滑动窗口后，即可找到所有的起始位置。
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const m = words.length;
  const n = words[0].length;
  const allLen = m * n;
  const ls = s.length;
  if (allLen > ls) return []
};