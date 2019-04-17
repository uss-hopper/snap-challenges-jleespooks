	SELECT
	tweet.tweetContent,
	profile.profileAtHandle,
FROM tweet,
		INNER JOIN `like` ON `like`.likeTweetId = tweet.tweetId,
		INNER JOIN profile on profile.profile = `like`.likeProfileId
	WHERE tweet.tweetId = HEX('0536faef082b454e9d444cdbe7887d7a');

