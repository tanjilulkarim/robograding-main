import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import SearchIcon from '@mui/icons-material/Search';
import StyleIcon from '@mui/icons-material/Style';
import {
    AppBar,
    Button,
    Container,
    Grid,
    Modal,
    Radio,
    Toolbar,
    Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Summary from '../Components/Summery';

const NewSubmission = () => {
	const [step, setStep] = React.useState(1);
	const [service, setService] = React.useState('20');
	const [open, setOpen] = React.useState(false);
	const [cardName, setCardName] = React.useState('');
	const [cardDes, setCardDes] = React.useState('');
	const [cardImage, setCardImage] = React.useState('');
	const [cards, setCards] = React.useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		const card = {
			id: cards.length + 1,
			name: cardName,
			description: cardDes,
			image: cardImage,
			quantity: '1',
			price: '1',
		};
		setCards([...cards, card]);
		setOpen(false);
		setCardImage('');
		e.target.reset();
	};
	const handleImage = e => {
		const reader = new FileReader();
		const file = e.target.files[0];
		reader.onloadend = () => {
			if (reader.readyState === 2) {
				setCardImage(reader.result);
			}
		};
		reader.readAsDataURL(file);
	};
	return (
		<div>
			<AppBar
				position='static'
				sx={{
					background:
						'linear-gradient(106.54deg, #140078 -4.67%, #6C31BC 112.32%)',
				}}>
				<Container maxWidth='lg'>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
							<img src='/images/robo.svg' height='54px' alt='' />
						</Typography>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
							<img src='/images/avatar.svg' alt='' />
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<h1
				style={{
					background:
						'linear-gradient(106.54deg, #140078 -4.67%, #6C31BC 112.32%)',
					color: '#fff',
					textAlign: 'center',
					padding: '100px',
					borderBottom: '3px solid #20BFB8',
				}}>
				Submit Cards For Grading
			</h1>

			<div className='timeline'>
				<div className={`timeline-item ${step === 1 && 'active'}`}>
					<div className='timeline-icon'>
						<BarChartIcon />
					</div>
					<span>Service</span>
				</div>
				<div className={`timeline-item ${step === 2 && 'active'}`}>
					<div className='timeline-icon'>
						<StyleIcon />
					</div>
					<span>Cards</span>
				</div>
				<div className={`timeline-item ${step === 3 && 'active'}`}>
					<div className='timeline-icon'>
						<LocalShippingOutlinedIcon />
					</div>
					<span>Shipping</span>
				</div>
				<div className={`timeline-item ${step === 4 && 'active'}`}>
					<div className='timeline-icon'>
						<CreditCardOutlinedIcon />
					</div>
					<span>Payment</span>
				</div>
				<div className={`timeline-item ${step === 5 && 'active'}`}>
					<div className='timeline-icon'>
						<ReceiptOutlinedIcon />
					</div>
					<span>Review</span>
				</div>
			</div>
			<div className='content'>
				<Container maxWidth='lg'>
					<div className='step-content'>
						<div className={`service ${step === 1 ? 'active' : ''}`}>
							<div>
								<h3>Select your service level</h3>
								<p style={{ margin: '10px 0' }}>
									Select your desired service level from the list below
								</p>

								<form style={{ margin: '20px 0' }}>
									<Button
										className={`service-item ${service === '20' && 'active'}`}
										onClick={() => setService('20')}>
										<div className='left'>
											<Radio
												checked={service === '20' ? true : false}
												value='20'
												name='radio-buttons'
												inputProps={{ 'aria-label': 'A' }}
											/>
											<h5>$ 20 / Card</h5>
										</div>
										<div className='right'>
											<p>Protection up to $500</p>
											<span>28 - 30 Day Turn Around</span>
										</div>
									</Button>
									<Button
										className={`service-item ${service === '50' && 'active'}`}
										onClick={() => setService('50')}>
										<div className='left'>
											<Radio
												checked={service === '50' ? true : false}
												value='50'
												name='radio-buttons'
												inputProps={{ 'aria-label': 'A' }}
											/>
											<h5>$ 50 / Card</h5>
										</div>
										<div className='right'>
											<p>Protection up to $500</p>
											<span>28 - 30 Day Turn Around</span>
										</div>
									</Button>
									<Button
										className={`service-item ${service === '100' && 'active'}`}
										onClick={() => setService('100')}>
										<div className='left'>
											<Radio
												checked={service === '100' ? true : false}
												value='100'
												name='radio-buttons'
												inputProps={{ 'aria-label': 'A' }}
											/>
											<h5>$ 100 / Card</h5>
										</div>
										<div className='right'>
											<p>Protection up to $500</p>
											<span>28 - 30 Day Turn Around</span>
										</div>
									</Button>
									<Button
										className={`service-item ${service === '250' && 'active'}`}
										onClick={() => setService('250')}>
										<div className='left'>
											<Radio
												checked={service === '250' ? true : false}
												value='a'
												name='radio-buttons'
												inputProps={{ 'aria-label': 'A' }}
											/>
											<h5>$ 250 / Card</h5>
										</div>
										<div className='right'>
											<p>Protection up to $500</p>
											<span>28 - 30 Day Turn Around</span>
										</div>
									</Button>
									<Button
										className={`service-item ${service === '1000' && 'active'}`}
										onClick={() => setService('1000')}>
										<div className='left'>
											<Radio
												checked={service === '1000' ? true : false}
												value='a'
												name='radio-buttons'
												inputProps={{ 'aria-label': 'A' }}
											/>
											<h5>$ 1000 / Card</h5>
										</div>
										<div className='right'>
											<p>Protection up to $500</p>
											<span>28 - 30 Day Turn Around</span>
										</div>
									</Button>
								</form>
							</div>
						</div>
						<div className={`cards ${step === 2 ? 'active' : ''}`}>
							<div>
								<h3>Add cards to your submission</h3>
								<p style={{ margin: '10px 0' }}>
									Search for a card below and click the "+" icon, then enter the
									quantity and value for each card.
								</p>
							</div>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={8}>
									<hr />
									<p>Search</p>
									<div className='card-search-box'>
										<SearchIcon />
										<input type='text' placeholder='Search' />
									</div>
									<div className='card-result'>
										<p>41,094 results</p>
										<p>
											Can't find your card?{' '}
											<Button className='add-btn' onClick={() => setOpen(true)}>
												Add Card Manually
											</Button>
										</p>
										<Modal
											open={open}
											onClose={() => setOpen(false)}
											aria-labelledby='modal-modal-title'
											aria-describedby='modal-modal-description'>
											<Box sx={{}} className='add-card-modal'>
												<Typography
													id='modal-modal-title'
													variant='h6'
													sx={{ pb: 2 }}
													component='h2'>
													Add Card Manually
												</Typography>
												<form onSubmit={handleSubmit}>
													<Grid container spacing={4}>
														<Grid item xs={12} sm={4}>
															<Typography
																id='modal-modal-title'
																variant='p'
																component='p'>
																Photo of Front of Card*
															</Typography>
															<div>
																<Button
																	component='label'
																	className='img-upload'>
																	{!cardImage ? (
																		<div className='image-upload-btn'>
																			<input
																				accept='image/*'
																				multiple=''
																				type='file'
																				hidden
																				onChange={handleImage}
																			/>
																			<svg
																				className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'
																				focusable='false'
																				viewBox='0 0 24 24'
																				aria-hidden='true'
																				data-testid='FileUploadOutlinedIcon'>
																				<path d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z'></path>
																			</svg>
																			<h6 className=''>Upload Image</h6>
																			<h6 className=''>or drag and drop</h6>
																		</div>
																	) : (
																		<div className='image-upload-btn'>
																			<img
																				src={cardImage}
																				alt=''
																				width='70%'
																				style={{ margin: '0 auto' }}
																			/>
																			<div>
																				<Button
																					className='img-control'
																					variant='contained'
																					onClick={() => setCardImage('')}>
																					Delete
																				</Button>
																				<Button
																					className='img-control'
																					variant='contained'
																					component='label'>
																					Replace
																					<input
																						accept='image/*'
																						multiple=''
																						type='file'
																						hidden
																						onChange={handleImage}
																					/>
																				</Button>
																			</div>
																		</div>
																	)}
																</Button>
															</div>
														</Grid>
														<Grid item xs={12} sm={8} className='card-form'>
															<div>
																<label htmlFor=''>Card Name*</label>
																<br />
																<input
																	className='card-name'
																	type='text'
																	name='name'
																	onChange={e => setCardName(e.target.value)}
																	placeholder='Enter Card Name'
																/>
															</div>
															<div>
																<label htmlFor=''>
																	Card Description*
																	<br />
																</label>
																<textarea
																	className='card-description'
																	type='text'
																	name='description'
																	onChange={e => setCardDes(e.target.value)}
																	placeholder='Enter Card Description'
																/>
																<span style={{ color: '#555' }}>
																	Card Year released, series, set, edition, card
																	number etc. *
																</span>
															</div>
														</Grid>
													</Grid>
													<div className='add-card-modal-footer'>
														<Button
															className='add-card-modal-footer-btn'
															onClick={() => setOpen(false)}>
															Cancel
														</Button>
														<Button
															variant='contained'
															type='submit'
															className='add-card-modal-footer-btn-submit'
															disabled={
																cardName && cardDes && cardImage ? false : true
															}>
															Add Card
														</Button>
													</div>
												</form>
											</Box>
										</Modal>
									</div>
									<div className='added-card'>
										<h3>Added Card(s)</h3>
										<table>
											<thead>
												<tr>
													<th>Qty</th>
													<th>Card(s)</th>
													<th>Value (USD)</th>
												</tr>
												{cards?.map((card, index) => (
													<tr>
														<td>
															<input
																type='number'
																value={card.quantity}
																className='card-quantity'
																onChange={e => {
																	let newCards = [...cards];
																	newCards[index].quantity = e.target.value;
																	console.log(newCards);
																	setCards(newCards);
																}}
															/>
														</td>
														<td>
															<div className='card-info'>
																<img src={card.image} width='100px' alt='' />
																<div>
																	<h4>{card.name}</h4>
																	<p>Added Manually</p>
																	<span>{card.description}</span>
																</div>
															</div>
														</td>
														<td>
															<input
																type='number'
																value={card.price}
																className='card-price'
																onChange={e => {
																	let newCards = [...cards];
																	newCards[index].price = e.target.value;
																	console.log(newCards);
																	setCards(newCards);
																}}
															/>
														</td>
													</tr>
												))}
											</thead>
										</table>
									</div>
								</Grid>
								<Grid item xs={12} sm={4}>
									<Summary setStep={setStep} service={service} cards={cards} />
								</Grid>
							</Grid>
						</div>
						<div className={`shipping ${step === 3 ? 'active' : ''}`}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={8}>
									<h2>Enter shipping details</h2>
									<p>
										Select your preferred return shipping method and enter your
										return shipping address
									</p>
									<hr />
									<h4>Shipping Address</h4>
									<form className='shipping-form'>
										<div className='name'>
											<div>
												<label>First Name</label>
												<br />
												<input
													type='text'
													name='firstName'
													placeholder='First Name'
												/>
											</div>
											<div>
												<label>Last Name</label>
												<br />
												<input
													type='text'
													name='lastName'
													placeholder='Last Name'
												/>
											</div>
										</div>
										<div className='address'>
											<div>
												<label>Adress</label>
												<br />
												<input
													type='text'
													name='address'
													placeholder='Adress'
												/>
											</div>
											<div>
												<label>Apt # (optional)</label>
												<br />
												<input type='text' name='apt' placeholder='Apt' />
											</div>
										</div>
										<div className='phone'>
											<label>Phone</label>
											<br />
											<input type='text' name='apt' placeholder='Phone Number' />
										</div>
									</form>
								</Grid>
								<Grid item xs={12} sm={4}>
									<Summary setStep={setStep} service={service} cards={cards} shipping={true} />
								</Grid>
							</Grid>
						</div>
					</div>

					<hr />
					<div className='footer'>
						<Button
							className={`back-btn ${step === 1 ? 'hidden' : ''}`}
							onClick={() =>
								setStep(step => (step > 1 ? (step -= 1) : (step = 1)))
							}>
							<ArrowBackOutlinedIcon />
							Back
						</Button>
						<Button
							className='next-btn'
							onClick={() =>
								setStep(step => (step < 5 ? (step += 1) : (step = 5)))
							}>
							Next
						</Button>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default NewSubmission;
