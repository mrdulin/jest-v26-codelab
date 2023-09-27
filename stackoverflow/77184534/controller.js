const { User, Account, Campaign } = require('./models');

exports.createCampaign = async (req, res) => {
	const { name } = req.body;
	return User.findByPk(req.userId).then((user) => {
		return Account.findOne({ where: { id: user.accountId } }).then((account) => {
			return Campaign.create({
				accountId: account.id,
				name: name,
				// uuid: uuid.v4(),
			})
				.then((campaign) => {
					if (campaign) {
						return res.status(201).json({
							id: campaign.id,
							name: campaign.name,
							uuid: campaign.uuid,
						});
					}
					return res.status(500).send({ message: 'Campaign not created' });
				})
				.catch((err) => {
					return res.status(500).send({ message: err.message });
				});
		});
	});
};
