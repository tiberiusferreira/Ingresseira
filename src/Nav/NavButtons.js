import React from 'react';

function HomeButton(props) {
    return  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512" aria-labelledby="title">
        <title id="title">Home Icon</title>
        <path fill={props.color} d="M345.863,281.853c19.152-8.872,38.221-15.344,56.953-19.308c5.403-1.143,8.856-6.45,7.713-11.853
				c-1.143-5.403-6.444-8.857-11.854-7.713c-21.683,4.588-43.704,12.261-65.728,22.865c-12.303-14.673-26.387-30.015-41.582-45.21
				c-16.147-16.146-32.462-31.048-47.961-43.878c13.412-16.959,24.359-35.947,32.641-56.728
				c12.913-32.401,19.461-69.419,19.461-110.029c0-5.523-4.478-10-10-10s-10,4.477-10,10c0,62.572-16.044,114.358-47.728,154.32
				c-5.979-4.561-11.776-8.753-17.312-12.486c-29.637-19.989-47.289-24.674-57.155-15.162c-0.07,0.065-0.143,0.129-0.211,0.196
				c-0.01,0.01-0.02,0.019-0.03,0.028c-0.006,0.006-0.011,0.013-0.017,0.018c-2.527,2.533-4.087,5.596-4.678,9.251L0.778,498.133
				c-1.57,3.744-0.72,8.067,2.151,10.938C4.843,510.984,7.401,512,10.003,512c1.302,0,2.616-0.254,3.865-0.778
				c0.028-0.012,0,0,0.028-0.012l351.941-147.588c3.337-0.54,6.172-1.904,8.569-4.061c0.174-0.145,0.337-0.299,0.5-0.453
				c0.064-0.063,0.133-0.115,0.196-0.179c0.01-0.01,0.018-0.021,0.027-0.03c0.069-0.068,0.133-0.142,0.199-0.213
				c9.511-9.867,4.826-27.518-15.163-57.153C355.94,295.269,351.139,288.675,345.863,281.853z M79.315,440.759
				c-2.087,13.013-6.728,21.567-8.961,25.087l-41.679,17.478l42.329-100.938C79.286,403.147,82.157,423.035,79.315,440.759z
				 M140.851,406.923c-4.032,22.984-14.726,34.063-17.767,36.811l-26.351,11.05c5.858-20.854,7.398-53.957-15.241-97.409
				l29.968-71.459C142.553,344.866,144.886,383.926,140.851,406.923z M176.522,421.323l-21.554,9.04
				c2.054-5.189,3.865-11.099,5.177-17.796c8.004-40.853-5.062-91.365-38.815-150.187l10.82-25.801
				c8.564,10.305,18.322,24.89,22.274,34.086c1.627,3.787,5.316,6.055,9.192,6.055c1.317,0,2.657-0.263,3.944-0.815
				c5.074-2.181,7.419-8.061,5.239-13.136c-5.864-13.644-20.733-34.874-32.107-46.559l16.533-39.425
				c2.896,5.31,6.483,11.128,10.785,17.506c2.962,4.392,6.207,8.945,9.697,13.625c34.207,51.906,33.433,105.035,26.746,140.484
				C197.342,386.105,182.115,413.71,176.522,421.323z M253.575,389.012l-47.474,19.908c6.855-15.036,13.848-34.775,18.004-56.812
				c4.642-24.614,6.683-56.982-1.906-91.935c4.737,5.004,9.61,10.019,14.609,15.018c14.958,14.957,30.056,28.836,44.52,41
				C279.894,363.404,258.239,384.918,253.575,389.012z M288.045,374.557c5.353-11.075,10.08-25.348,12.188-43.175
				c6.036,4.608,11.889,8.842,17.475,12.609c6.381,4.304,12.198,7.889,17.51,10.785L288.045,374.557z M323.217,323.485
				c-21.74-15.403-47.405-37.577-72.266-62.438c-24.86-24.86-47.035-50.525-62.437-72.265
				c-14.895-21.023-18.909-31.758-19.966-36.408c4.65,1.058,15.385,5.072,36.408,19.966c3.118,2.209,6.322,4.57,9.586,7.045
				c-0.701,0.722-1.393,1.451-2.106,2.164c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929
				c2.559,0,5.119-0.977,7.071-2.929c1.256-1.256,2.493-2.529,3.716-3.814c15.169,12.539,31.208,27.179,46.929,42.9
				c13.519,13.519,26.23,27.271,37.504,40.504c-1.806,1.003-3.611,2.023-5.416,3.065c-4.783,2.762-6.422,8.878-3.66,13.66
				c1.852,3.208,5.213,5.002,8.67,5.002c1.696,0,3.416-0.433,4.99-1.342c2.776-1.604,5.554-3.143,8.331-4.646
				c4.345,5.518,8.377,10.883,12.018,16.023c14.896,21.023,18.909,31.758,19.966,36.408
				C354.974,342.393,344.239,338.379,323.217,323.485z"/>
        <path fill={props.color} d="M180.884,288.533c-2.267-5.037-8.186-7.283-13.223-5.016c-4.88,2.196-7.14,7.822-5.214,12.751
				c1.514,3.963,5.299,6.43,9.34,6.43c1.096,0,2.21-0.182,3.304-0.564c5.212-1.824,7.96-7.529,6.135-12.742
				C181.131,289.121,181.002,288.795,180.884,288.533z"/>
        <path fill={props.color} d="M373.433,154.691c1.953,1.952,4.512,2.929,7.071,2.929c2.56,0,5.118-0.977,7.071-2.929
				c22.343-22.343,58.542-32.583,84.971-34.716c5.505-0.444,9.607-5.268,9.163-10.772c-0.445-5.505-5.258-9.591-10.772-9.163
				c-29.973,2.419-71.326,14.331-97.504,40.509C369.528,144.454,369.528,150.786,373.433,154.691z"/>
        <path fill={props.color} d="M504.589,101.963c-0.283-0.076-0.571-0.151-0.862-0.224c-5.359-1.336-10.785,1.929-12.12,7.288
				c-1.334,5.359,1.929,10.786,7.288,12.12l0.511,0.132c0.868,0.233,1.74,0.345,2.598,0.345c4.414,0,8.454-2.945,9.652-7.411
				C513.087,108.879,509.924,103.395,504.589,101.963z"/>
        <path fill={props.color} d="M73.504,83.621h10v10c0,5.522,4.477,10,10,10c5.523,0,10-4.478,10-10v-10h10c5.523,0,10-4.478,10-10s-4.477-10-10-10h-10
				v-10c0-5.522-4.477-10-10-10c-5.523,0-10,4.478-10,10v10h-10c-5.523,0-10,4.478-10,10C63.504,79.144,67.981,83.621,73.504,83.621
				z"/>
        <path fill={props.color} d="M307.502,180.62h10.001v9.999c0,5.523,4.478,10,10,10c5.523,0,10-4.477,10-10v-9.999h9.999c5.522,0,10-4.478,10-10
				c0-5.522-4.478-10-10-10h-9.999v-10.001c0-5.522-4.477-10-10-10c-5.522,0-10,4.478-10,10v10.001h-10.001c-5.522,0-10,4.478-10,10
				C297.502,176.143,301.98,180.62,307.502,180.62z"/>
        <path fill={props.color} d="M446.501,417.618h-10v-10c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10v10h-10c-5.522,0-10,4.478-10,10
				c0,5.522,4.478,10,10,10h10v10c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-10h10c5.522,0,10-4.478,10-10
				C456.501,422.096,452.024,417.618,446.501,417.618z"/>
        <path fill={props.color} d="M389.969,60.001c16.542,0,30-13.458,30-30s-13.458-30-30-30s-30,13.458-30,30S373.427,60.001,389.969,60.001z
				 M389.969,20.001c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10s-10-4.486-10-10C379.969,24.487,384.455,20.001,389.969,20.001z
				"/>
        <path fill={props.color} d="M452.501,173.619c-16.542,0-30,13.458-30,30s13.458,30,30,30s30-13.458,30-30S469.042,173.619,452.501,173.619z
				 M452.501,213.619c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S458.015,213.619,452.501,213.619z"/>
        <path fill={props.color} d="M198.503,95.62c16.542,0,30-13.458,30-30s-13.458-30-30-30s-30,13.458-30,30S181.961,95.62,198.503,95.62z
				 M198.503,55.62c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10s-10-4.486-10-10C188.503,60.107,192.989,55.62,198.503,55.62z"/>
        <path fill={props.color} d="M449.19,294.058c0-5.508-4.492-10-10-10c-5.508,0-10,4.492-10,10s4.492,10,10,10
				C444.698,304.058,449.19,299.565,449.19,294.058z"/>
        <path fill={props.color} d="M335.189,95.06c5.508,0,10-4.492,10-10s-4.492-10-10-10c-5.508,0-10,4.492-10,10
				C325.19,90.567,329.682,95.06,335.189,95.06z"/>
        <path fill={props.color} d="M469.189,359.057c-5.508,0-10.001,4.493-10.001,10.001c0,5.508,4.493,10,10.001,10c5.507,0,10-4.492,10-10
				C479.189,363.55,474.696,359.057,469.189,359.057z"/>
        <path fill={props.color} d="M139.192,30.001c5.508,0,10-4.492,10-10c0-5.508-4.492-10-10-10s-10,4.492-10,10
				C129.192,25.509,133.684,30.001,139.192,30.001z"/>
    </svg>;
}

function TicketButton(props) {
    return  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 460.298 460.297" aria-labelledby="title">
        <title id="title">Ticket Icon</title>
        <path fill={props.color} d="M419.304,232.221c0.772,0.333,1.447,0.78,2.146,1.203l6.08-13.941
			c-0.788-0.228-1.577-0.415-2.349-0.756c-9.315-4.064-13.567-14.908-9.51-24.215l-34.311-14.965l37.4,52.502
			C418.939,232.124,419.126,232.148,419.304,232.221z"/>
        <path fill={props.color} d="M9.535,242.195l208.181,90.78L90.617,154.561l-4.715-6.617l6.617-4.715
			c4.609-3.284,5.69-9.714,2.406-14.323l-4.715-6.625l6.617-4.715l11.99-8.543l6.625-4.715l4.715,6.617
			c1.926,2.699,5.056,4.316,8.381,4.316c2.138,0,4.194-0.658,5.942-1.91c2.235-1.593,3.715-3.959,4.17-6.665
			c0.455-2.707-0.171-5.422-1.764-7.657l-4.715-6.617l6.617-4.715l11.99-8.543l0.122-0.089L91.902,53.319
			c-3.016,6.917-9.779,11.047-16.875,11.047c-2.455,0-4.95-0.496-7.348-1.536l-5.885,13.493c9.315,4.064,13.575,14.9,9.51,24.215
			c-3.016,6.917-9.779,11.047-16.875,11.047c-2.455,0-4.95-0.496-7.348-1.536l-5.885,13.493c9.315,4.064,13.575,14.9,9.51,24.215
			c-3.016,6.917-9.779,11.047-16.875,11.047c-2.455,0-4.95-0.496-7.348-1.536l-5.885,13.493c9.315,4.064,13.575,14.9,9.51,24.215
			c-3.016,6.917-9.779,11.047-16.875,11.047c-2.455,0-4.95-0.496-7.348-1.536L0,217.98C9.34,222.036,13.599,232.88,9.535,242.195z"
        />
        <path fill={props.color} d="M139.194,119.957c-3.235,2.309-6.966,3.414-10.657,3.414c-5.747,0-11.413-2.682-14.997-7.722
			l-11.99,8.535c5.893,8.275,3.967,19.761-4.308,25.662l134.959,189.445l9.169,12.868l9.161,12.859l51.657,72.515
			c3.235-2.309,6.966-3.414,10.657-3.414c5.747,0,11.413,2.682,14.997,7.722c0.488,0.683,0.837,1.414,1.219,2.138l12.388-8.828
			c-0.561-0.593-1.138-1.171-1.626-1.853c-5.893-8.275-3.967-19.761,4.308-25.662c3.235-2.309,6.966-3.414,10.657-3.414
			c5.747,0,11.413,2.682,14.997,7.722c0.488,0.683,0.837,1.414,1.219,2.138l12.388-8.828c-0.561-0.593-1.138-1.171-1.626-1.853
			c-5.893-8.275-3.967-19.761,4.308-25.654c3.235-2.309,6.966-3.414,10.657-3.414c5.747,0,11.413,2.682,14.997,7.722
			c0.488,0.683,0.837,1.414,1.219,2.138l12.388-8.828c-0.561-0.593-1.138-1.171-1.626-1.853c-5.893-8.275-3.967-19.761,4.308-25.654
			c3.235-2.309,6.966-3.414,10.657-3.414c5.747,0,11.413,2.682,14.997,7.722c0.488,0.683,0.837,1.414,1.219,2.138l12.388-8.828
			c-0.561-0.593-1.138-1.171-1.626-1.853c-5.893-8.275-3.967-19.761,4.308-25.654l-41.984-58.932l-2.91-4.081l-0.39-0.545
			l-10.835-15.209l-5.69-7.99l-41.309-57.989l-9.161-12.859l-9.169-12.868L265.057,30.291c-3.235,2.309-6.966,3.414-10.657,3.414
			c-5.747,0-11.413-2.682-14.997-7.722l-11.99,8.543c5.893,8.275,3.967,19.761-4.308,25.654c-3.235,2.309-6.966,3.414-10.657,3.414
			c-5.747,0-11.413-2.682-14.997-7.722l-11.99,8.543c2.869,4.032,3.853,8.828,3.186,13.363c-0.398,2.699-1.414,5.275-2.967,7.576
			c-1.195,1.78-2.674,3.406-4.528,4.723c-0.732,0.52-1.553,0.764-2.325,1.162c-2.658,1.374-5.471,2.26-8.332,2.26
			c-5.747,0-11.413-2.682-14.997-7.722l-11.99,8.543C149.395,102.57,147.469,114.064,139.194,119.957z"/>
    </svg>;
}

function SettingsButton(props) {
    return  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 54 54" aria-labelledby="title">
        <title id="title">Settings Icon</title>
        <path fill={props.color} d="M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571
		c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571
		c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78
		C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571
		c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571
		c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052
		c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966
		c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42
		c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052
		c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553
		c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114
		S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22
		C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571
		c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854
		c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052
		c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572
		c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294
		C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052
		c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553
		c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78
		C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64
		c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104
		l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"/>
        <path fill={props.color} d="M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7
		s7,3.141,7,7S30.859,34,27,34z"/>
    </svg>;
}

function EditButton(props) {
    return  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 64 64" aria-labelledby="title">
        <title id="title">Edit Icon</title>
        <path fill={props.color} d="m62.463,1.543c-1.017-1.017-2.403-1.542-3.83-1.543-1.43,0.021-2.778,0.591-3.801,1.609l-2.446,2.443c-0.01,0.012-0.015,0.025-0.024,0.035l-31.909,31.819c-0.104,0.104-0.158,0.233-0.234,0.353-0.131,0.152-0.245,0.317-0.327,0.505l-3.254,7.5c-0.324,0.75-0.169,1.62 0.397,2.211 0.392,0.41 0.927,0.631 1.476,0.631 0.241,0 0.486-0.043 0.719-0.131l7.824-2.943c0.217-0.081 0.406-0.209 0.579-0.352 0.126-0.08 0.262-0.14 0.367-0.245l32.035-31.945c0.006-0.006 0.008-0.014 0.015-0.02l2.341-2.33c2.118-2.111 2.15-5.52 0.072-7.597zm-35.905,37.576l-1.777-1.773 29.151-29.069 1.776,1.773-29.15,29.069zm32.95-32.857l-.916,.912-1.784-1.779 .911-.91c0.265-0.264 0.609-0.411 0.972-0.416 0.344-0.008 0.653,0.119 0.883,0.348 0.491,0.49 0.459,1.319-0.066,1.845z"/>
        <path fill={props.color} d="M58.454,22.253c-1.128,0-2.04,0.911-2.04,2.034v33.611c0,1.121-0.915,2.033-2.04,2.033H6.12    c-1.126,0-2.04-0.912-2.04-2.033V9.787c0-1.121,0.914-2.034,2.04-2.034h33.403c1.127,0,2.04-0.911,2.04-2.034    s-0.913-2.034-2.04-2.034H6.12C2.745,3.685,0,6.422,0,9.787v48.111C0,61.263,2.745,64,6.12,64h48.254    c3.374,0,6.12-2.737,6.12-6.102V24.287C60.494,23.164,59.581,22.253,58.454,22.253z"/>
    </svg>;


}

export {HomeButton, TicketButton, SettingsButton, EditButton}