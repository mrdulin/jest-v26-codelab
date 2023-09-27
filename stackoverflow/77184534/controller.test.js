
const { createCampaign } = require('./controller');
const { User, Account, Campaign } = require('./models');


jest.mock('./models', () => ({
	User: {
		findByPk: jest.fn(),
	},
	Account: {
		findOne: jest.fn(),
	},
	Campaign: {
		create: jest.fn(),
		findOne: jest.fn(),
	},
}));

describe('CampaignController', () => {
	let mockStatus, mockJson, mockRes, mockSend;
	mockJson = jest.fn();
	mockSend = jest.fn();
	mockStatus = jest.fn(() => ({ json: mockJson, send: mockSend }));
	mockRes = { status: mockStatus };

	const mockUser = {
		id: 'userId',
		firstName: 'firstName',
		lastName: 'lastName',
		email: 'email',
		accountId: 'accountId',
	};
	const mockAccount = {
		id: 'accountId',
		name: 'accountName',
		partner: 'partner',
	};
	const mockCampaign = {
		id: 'campaignId',
		name: 'campaignName',
		accountId: 'accountId',
		status: 'active',
	};

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('createCampaign', () => {
		it('should create a campaign', async () => {
			User.findByPk.mockResolvedValue(mockUser);
			Account.findOne.mockResolvedValue(mockAccount);
			Campaign.create.mockResolvedValue(mockCampaign);

			await createCampaign(
				{
					body: {
						name: 'campaignName',
					},
					userId: 'userId',
				},
				mockRes,
			);

			expect(User.findByPk).toHaveBeenCalledWith('userId');
			expect(Account.findOne).toHaveBeenCalledWith({ where: { id: mockUser.accountId } });
			expect(Campaign.create).toHaveBeenCalled();
			expect(mockStatus).toHaveBeenCalledWith(201);
			expect(mockJson).toHaveBeenCalled();
		});
	});
});
