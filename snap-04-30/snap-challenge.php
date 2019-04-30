<?php
namespace jamparan3\snapchallenge;
/**
 * Taking a DateTime object as parameter and returning an array of all tweets on that date
 * Snap challenge 04/30
 */

/**
 * date and time this Tweet was sent, in a PHP DateTime object
 * @var \DateTime $tweetDate
 **/
private $tweetDate;

/**
 * * @param \DateTime|string|null $newTweetDate date and time Tweet was sent or null if set to current date and time
 * * @throws \Exception if some other exception occur
 */

public function __construct($newTweetDate = null) {
	try {
		$this->setTweetDate($newTweetDate);
	}
	catch(\TypeError $exception)
		$exceptionType = get_class($exception);
		throw(new $exceptionType($exception->getMessage()$exception));

		/**
		 * accessor method for tweet date
		 * @return ($this-> tweetDate);
		 */
			public function getTweetDate() : \DateTime {
		return ($this->tweetDate);
	}

	/**
	 * mutator method for tweet date
	 *
	 * @param \DateTime|string|null $newTweetDate tweet date as a DateTime object or string (or null to load the current time)
	 * @throws \InvalidArgumentException if $newTweetDate is not a valid object or string
	 * @throws \RangeException if $newTweetDate is a date that does not exist
	 **/
	public function setTweetDate($newTweetDate = null) : void {
		// base case: if the date is null, use the current date and time
		if($newTweetDate === null) {
			$this->tweetDate = new \DateTime();
			return;
		}

